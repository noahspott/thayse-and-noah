import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const MAX_FILE_COUNT = 100; // Max photos user can upload

const PhotoUploader = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    // Check if number of selected files exceeds max limit
    if (selectedFiles.length + files.length > MAX_FILE_COUNT) {
      alert(`You can only upload up to ${MAX_FILE_COUNT} photos.`);
      return;
    }

    // Add the new files to the current files list
    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const selectedFiles = event.dataTransfer.files;

    if (selectedFiles.length + files.length > MAX_FILE_COUNT) {
      alert(`You can only upload up to ${MAX_FILE_COUNT} photos.`);
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  const handleUpload = async () => {
    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("photos", file));

      // Post the data to your backend to process the upload
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload files.");
      }

      const result = await response.json();

      if (result.success) {
        setProgress(100);
        alert("Upload successful!");
      } else {
        throw new Error(result.message || "Unknown error during upload");
      }
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="mx-auto flex max-w-lg flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleFileDrop}
    >
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Upload Your Photos
      </h2>

      {error && <div className="mb-4 font-semibold text-red-500">{error}</div>}

      <div className="w-full">
        {files.length > 0 ? (
          <ul className="mb-4 space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-4 text-sm text-gray-500">
            No files selected. You can drag and drop photos or click to select.
          </p>
        )}
      </div>

      <input
        type="file"
        id="file-input"
        multiple
        onChange={handleFileChange}
        disabled={uploading}
        className="mb-4 cursor-pointer rounded-lg border-2 border-gray-300 px-4 py-2 hover:border-gray-400"
      />

      <button
        onClick={handleUpload}
        disabled={uploading || files.length === 0}
        className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
      >
        {uploading ? (
          "Uploading..."
        ) : (
          <>
            <FaUpload className="mr-2 inline" /> Upload
          </>
        )}
      </button>

      {uploading && (
        <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200">
          <div
            className="h-2.5 rounded-full bg-green-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
