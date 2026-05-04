import { Mail, MapPin } from "lucide-react";

/** Lien WhatsApp Web / app (numéro sans + ni espaces). */
const WHATSAPP_HREF = "https://wa.me/33788055007";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
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
          <WhatsAppIcon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground">WhatsApp</div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Contacter sur WhatsApp au +33 7 88 05 50 07"
            >
              +33 7 88 05 50 07
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
