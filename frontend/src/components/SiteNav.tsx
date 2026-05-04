import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/biographie", label: "Biographie & équipe", end: false },
  { to: "/emotions", label: "Émotions encore et toujours", end: false },
  { to: "/impro", label: "Et... IMPRO", end: false },
  { to: "/inscription", label: "Inscription", end: false },
] as const;

const navClass =
  "text-sm text-foreground/75 hover:text-primary transition-colors aria-[current=page]:text-primary aria-[current=page]:font-semibold";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl font-semibold text-primary tracking-tight"
        >
          Théâtre Thérapie
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href="mailto:yannbaff@gmail.com"
            className="text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-secondary transition"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-[color:var(--cream)]">
          <nav className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className="text-base py-1.5 text-foreground/80 aria-[current=page]:text-primary aria-[current=page]:font-semibold"
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="mailto:yannbaff@gmail.com"
              className="mt-2 text-center text-sm rounded-full bg-primary text-primary-foreground px-4 py-2.5"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
