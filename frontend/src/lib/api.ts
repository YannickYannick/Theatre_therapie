const base = import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";

export async function fetchApiHealth(): Promise<{ status: string; service: string }> {
  const res = await fetch(`${base}/api/health/`);
  if (!res.ok) {
    throw new Error(`API ${res.status}`);
  }
  return res.json() as Promise<{ status: string; service: string }>;
}

export type WorkshopTone = "sky" | "mint";

export type WorkshopListItem = {
  slug: string;
  title: string;
  level_label: string;
  summary: string;
  tone: WorkshopTone;
  sessions_label: string;
  schedule_time: string;
  schedule_summary: string;
  sort_order: number;
};

export type WorkshopSessionItem = {
  sort_order: number;
  title: string;
  description: string;
};

export type WorkshopDetail = {
  slug: string;
  title: string;
  badge: string;
  level_label: string;
  summary: string;
  tagline: string;
  pitch: string;
  tone: WorkshopTone;
  schedule_time: string;
  dates_text: string;
  location: string;
  max_students: number;
  sessions_count: number;
  sessions_label: string;
  price_display: string;
  program_subtitle: string;
  program_subtitle_resolved: string;
  highlight_title: string;
  highlight_text: string;
  meta_title: string;
  meta_description: string;
  sessions: WorkshopSessionItem[];
};

export async function fetchWorkshops(): Promise<WorkshopListItem[]> {
  const res = await fetch(`${base}/api/workshops/`);
  if (!res.ok) {
    throw new Error(`API workshops ${res.status}`);
  }
  return res.json() as Promise<WorkshopListItem[]>;
}

export async function fetchWorkshopBySlug(slug: string): Promise<WorkshopDetail> {
  const res = await fetch(`${base}/api/workshops/${encodeURIComponent(slug)}/`);
  if (!res.ok) {
    throw new Error(`API workshop ${slug} ${res.status}`);
  }
  return res.json() as Promise<WorkshopDetail>;
}
