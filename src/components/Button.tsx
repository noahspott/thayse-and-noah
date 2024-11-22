interface ButtonProps {
  href?: string;
  label: string;
  styles?: string;
}

export default function Button({ href, label, styles = "" }: ButtonProps) {
  return href ? (
    <a
      href={href}
      className={`select-none px-4 py-4 text-sm uppercase tracking-[1.25px] hover:cursor-pointer ${styles} duration-100 hover:opacity-90 hover:shadow-md`}
    >
      {label}
    </a>
  ) : (
    <div
      className={`select-none px-4 py-4 text-sm uppercase tracking-[1.25px] hover:cursor-pointer ${styles} duration-100 hover:opacity-90 hover:shadow-md`}
    >
      {label}
    </div>
  );
}
