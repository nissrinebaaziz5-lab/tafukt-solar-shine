import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-horizontal.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 shadow-card backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-px flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Tafukt Energy — Accueil">
          <img src={logo} alt="Tafukt Energy" className="h-10 w-auto sm:h-11" width={180} height={48} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="group relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-solar transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
          >
            <Phone size={16} className="text-solar" />
            {COMPANY.phone}
          </a>
          <Button asChild variant="solar">
            <Link to="/devis">Demander un devis</Link>
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted"
              activeProps={{ className: "bg-muted text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="solar" className="mt-2 w-full">
            <Link to="/devis">Demander un devis</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
