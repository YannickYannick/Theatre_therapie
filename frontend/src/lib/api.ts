const base = import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";

export async function fetchApiHealth(): Promise<{ status: string; service: string }> {
  const res = await fetch(`${base}/api/health/`);
  if (!res.ok) {
    throw new Error(`API ${res.status}`);
  }
  return res.json() as Promise<{ status: string; service: string }>;
}

/** Types ateliers : source de vérité côté front dans `workshopPresets.ts`. */
export type {
  WorkshopDetail,
  WorkshopListItem,
  WorkshopSessionItem,
  WorkshopTone,
} from "./workshopPresets";
