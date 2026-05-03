import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import {
  WorkshopHero,
  PracticalInfo,
  ProgramGrid,
  WorkshopCTA,
} from "@/components/workshop";
import { fetchWorkshopBySlug, type WorkshopDetail, type WorkshopTone } from "@/lib/api";

function isTone(v: string): v is WorkshopTone {
  return v === "sky" || v === "mint";
}

export function WorkshopDetailPage({ slug }: { slug: string }) {
  const [data, setData] = useState<WorkshopDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setData(null);
    fetchWorkshopBySlug(slug)
      .then((w) => {
        if (!cancelled) setData(w);
      })
      .catch(() => {
        if (!cancelled) setError("Impossible de charger cet atelier. Vérifiez que l’API tourne.");
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (!data) return;
    document.title = data.meta_title || data.title;
    const el = document.querySelector('meta[name="description"]');
    if (el && data.meta_description) {
      el.setAttribute("content", data.meta_description);
    }
  }, [data]);

  if (error) {
    return (
      <div className="mx-auto max-w-lg px-5 py-20 text-center">
        <p className="text-foreground/80">{error}</p>
        <Link to="/" className="mt-4 inline-block text-primary font-semibold hover:underline">
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-24 text-center text-muted-foreground">
        Chargement de l’atelier…
      </div>
    );
  }

  const tone: WorkshopTone = isTone(data.tone) ? data.tone : "sky";
  const sessions = [...data.sessions]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((s) => ({ title: s.title, description: s.description }));

  const highlight =
    data.highlight_title && data.highlight_text ? (
      <div className="rounded-[1.5rem] bg-[color:var(--mint-soft)]/30 border border-[color:var(--mint-soft)]/50 px-6 py-5 flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div>
          <div className="font-display font-semibold text-foreground">{data.highlight_title}</div>
          <p className="text-sm text-foreground/75 mt-1">{data.highlight_text}</p>
        </div>
      </div>
    ) : undefined;

  return (
    <>
      <WorkshopHero
        tone={tone}
        badge={data.badge}
        title={data.title}
        tagline={data.tagline}
        pitch={data.pitch}
      />
      <PracticalInfo
        schedule={data.schedule_time}
        dates={data.dates_text}
        location={data.location}
        maxStudents={data.max_students}
        priceDisplay={data.price_display}
        sessionsLabel={data.sessions_label}
        extra={highlight}
      />
      <ProgramGrid tone={tone} sessions={sessions} subtitle={data.program_subtitle_resolved} />
      <WorkshopCTA />
    </>
  );
}
