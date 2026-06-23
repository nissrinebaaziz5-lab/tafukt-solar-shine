import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-solar">Témoignages</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce que disent nos clients</h2>
          <p className="mt-4 text-muted-foreground">
            La confiance de nos clients est notre plus belle réussite.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <article className="card-hover flex h-full flex-col rounded-2xl bg-card p-7 shadow-card">
                <Quote className="h-9 w-9 text-solar" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-solar text-solar" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-foreground/80">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
