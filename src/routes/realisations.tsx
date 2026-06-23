import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Zap } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/site";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Nos projets solaires au Maroc | Tafukt Energy" },
      {
        name: "description",
        content:
          "Découvrez nos réalisations solaires : projets résidentiels, industriels, agricoles et commerciaux à Marrakech, Casablanca, Rabat, Agadir, Ouarzazate et Settat.",
      },
      { property: "og:title", content: "Nos réalisations — Tafukt Energy" },
      { property: "og:description", content: "Une galerie de projets solaires partout au Maroc." },
      { property: "og:url", content: "https://tafukt-solar-shine.lovable.app/realisations" },
      { property: "og:image", content: PROJECTS[0].image },
    ],
    links: [{ rel: "canonical", href: "https://tafukt-solar-shine.lovable.app/realisations" }],
  }),
  component: Projects,
});

type Filter = "Tous" | ProjectCategory;

function Projects() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const filters: Filter[] = ["Tous", ...PROJECT_CATEGORIES];
  const visible = filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHeader
        current="Réalisations"
        title="Nos projets à travers le Maroc"
        subtitle="Plus de 100 installations réalisées avec succès pour des clients exigeants."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px">
          <Reveal className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  filter === f
                    ? "bg-navy text-white shadow-card"
                    : "border border-border bg-card text-foreground/70 hover:border-navy hover:text-navy",
                )}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="card-hover group h-full overflow-hidden rounded-2xl bg-card shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.city}`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-solar px-3 py-1 text-xs font-semibold text-navy">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold">{p.name}</h2>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-solar" /> {p.city}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Zap size={14} className="text-solar" /> {p.power}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-foreground/75">{p.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
