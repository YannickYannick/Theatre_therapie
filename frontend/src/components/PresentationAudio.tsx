import { useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play } from "lucide-react";

type PresentationAudioProps = {
  src: string;
  title: string;
  description: string;
};

export function PresentationAudio({ src, title, description }: PresentationAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const sync = () => setPlaying(!el.paused);
    const onEnded = () => setPlaying(false);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }

  return (
    <div className="rounded-[1.5rem] border border-border/60 bg-secondary/40 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3 min-w-0">
        <Headphones className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
        <div>
          <p className="font-semibold text-foreground text-sm">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shrink-0"
        aria-pressed={playing}
        aria-label={playing ? "Mettre en pause" : "Lire la présentation audio"}
      >
        {playing ? <Pause className="h-4 w-4 shrink-0" aria-hidden /> : <Play className="h-4 w-4 shrink-0" aria-hidden />}
        {playing ? "Pause" : "Lire"}
      </button>
      {/* Fichier WhatsApp : conteneur MP4 audio */}
      <audio ref={audioRef} src={src} preload="metadata" className="hidden" />
    </div>
  );
}
