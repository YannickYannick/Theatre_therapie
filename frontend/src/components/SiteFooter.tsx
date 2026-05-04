import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[color:var(--cream-deep)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-8 sm:grid-cols-3 text-sm">
        <div className="flex items-start gap-3">
          <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">Écrire</div>
            <a
              href="mailto:yannbaff@gmail.com"
              className="text-muted-foreground hover:text-primary transition"
            >
              yannbaff@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <InstagramIcon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">Suivre</div>
            <a
              href="https://www.instagram.com/theatre_therapie/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              @theatre_therapie
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">Trouver</div>
            <address className="text-muted-foreground not-italic space-y-0.5">
              <span className="block text-foreground/90">L&apos;Âge d&apos;or</span>
              <span className="block">26 rue du Dr Magnan</span>
              <span className="block">75013 Paris</span>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Théâtre Thérapie</span>
          <span>Cours & ateliers de théâtre · Paris</span>
        </div>
      </div>
    </footer>
  );
}
