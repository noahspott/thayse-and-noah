import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ redirect }) => {
  return redirect("https://weduploader.com/thayse-and-noah-wedding");
};
