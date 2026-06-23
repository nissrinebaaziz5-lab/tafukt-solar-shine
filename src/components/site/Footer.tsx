import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS, SERVICES, COMPANY } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import logo from "@/assets/logo-circle.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-full bg-white p-1 shadow-lg">
            <img src={logo} alt="Tafukt Energy" className="h-20 w-20 rounded-full" width={80} height={80} loading="lazy" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Tafukt Energy SARL accompagne le Maroc vers un avenir durable grâce à des solutions
            d'énergie solaire innovantes et fiables.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-solar">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 transition-colors hover:text-solar">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-solar">Nos services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-white/70 transition-colors hover:text-solar">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-solar">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3 text-white/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-solar" />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <a href={`tel:${COMPANY.phoneHref}`} className="flex gap-3 text-white/70 transition-colors hover:text-solar">
                <Phone size={18} className="mt-0.5 shrink-0 text-solar" />
                <span>{COMPANY.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex gap-3 text-white/70 transition-colors hover:text-solar">
                <Mail size={18} className="mt-0.5 shrink-0 text-solar" />
                <span>{COMPANY.email}</span>
              </a>
            </li>
            <li className="flex gap-3 text-white/70">
              <Clock size={18} className="mt-0.5 shrink-0 text-solar" />
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.</p>
          <p>Énergie solaire · Maroc</p>
        </div>
      </div>
    </footer>
  );
}
