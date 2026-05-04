import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FileDown, Sparkles } from "lucide-react";

import { PresentationAudio } from "@/components/PresentationAudio";
import type { AtelierSlug } from "@/components/BilletterieAtelierButtons";
import {
  WorkshopHero,
  PracticalInfo,
  ProgramGrid,
  WorkshopCTA,
} from "@/components/workshop";
import { getWorkshopDetail, type WorkshopTone } from "@/lib/workshopPresets";

function isTone(v: string): v is WorkshopTone {
  return v === "sky" || v === "mint";
}

export function WorkshopDetailPage({ slug }: { slug: string }) {
  const data = useMemo(() => getWorkshopDetail(slug), [slug]);

  useEffect(() => {
    if (!data) return;
    document.title = data.meta_title || data.title;
    const el = document.querySelector('meta[name="description"]');
    if (el && data.meta_description) {
      el.setAttribute("content", data.meta_description);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="mx-auto max-w-lg px-5 py-20 text-center">
        <p className="text-foreground/80">Cet atelier n’existe pas ou n’est plus proposé.</p>
        <Link to="/" className="mt-4 inline-block text-primary font-semibold hover:underline">
          Retour à l’accueil
        </Link>
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
        extra={
          <>
            {slug === "emotions" && (
              <PresentationAudio
                src="/audio/emotions-presentation.mp4"
                title="Présentation vocale"
                description="Court message audio sur cet atelier."
              />
            )}
            {highlight}
          </>
        }
      />
      {slug === "emotions" && (
        <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-4 pb-2">
          <a
            href="/docs/planning-emotions-theatre.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition"
          >
            <FileDown className="h-4 w-4 text-primary shrink-0" aria-hidden />
            Télécharger le planning (PDF)
          </a>
        </div>
      )}
      <ProgramGrid tone={tone} sessions={sessions} subtitle={data.program_subtitle_resolved} />
      <WorkshopCTA
        currentSlug={slug === "emotions" || slug === "impro" ? (slug as AtelierSlug) : undefined}
      />
    </>
  );
}
