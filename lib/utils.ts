import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build an Unsplash CDN URL from a bare photo ID (e.g. "photo-1600210492486-724fe5c67fb3") */
export function unsplashUrl(
  id: string,
  { w = 1920, h = 1080, q = 80 }: { w?: number; h?: number; q?: number } = {}
): string {
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&auto=format&fit=crop&q=${q}`;
}

/**
 * Resolve a project image reference to a full URL.
 * Local paths (starting with "/") are returned as-is.
 * Unsplash photo IDs are wrapped in the CDN URL.
 */
export function resolveProjectImage(id: string, params = "auto=format&fit=crop&w=900&q=72"): string {
  return id.startsWith("/") ? id : `https://images.unsplash.com/${id}?${params}`;
}
