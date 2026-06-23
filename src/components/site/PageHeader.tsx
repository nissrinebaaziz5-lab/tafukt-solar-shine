import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  current: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, current, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-navy)] pt-30 pb-16 text-white sm:pb-20">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-solar/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-solar/10 blur-3xl" />
      <div className="container-px relative">
        <nav className="flex items-center gap-1.5 text-sm text-white/60">
          <Link to="/" className="transition-colors hover:text-solar">
            Accueil
          </Link>
          <ChevronRight size={14} />
          <span className="text-solar">{current}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
