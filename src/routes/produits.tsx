import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/site";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Produits — Panneaux, batteries, onduleurs & bornes | Tafukt Energy" },
      {
        name: "description",
        content:
          "Notre catalogue d'équipements solaires : panneaux photovoltaïques, batteries de stockage, onduleurs, systèmes de monitoring et bornes de recharge.",
      },
      { property: "og:title", content: "Catalogue de produits — Tafukt Energy" },
      { property: "og:description", content: "Des équipements solaires haut de gamme et certifiés." },
      { property: "og:url", content: "https://tafukt-solar-shine.lovable.app/produits" },
      { property: "og:image", content: PRODUCTS[0].image },
    ],
    links: [{ rel: "canonical", href: "https://tafukt-solar-shine.lovable.app/produits" }],
  }),
  component: Products,
});

function Products() {
  return (
    <Layout>
      <PageHeader
        current="Produits"
        title="Un équipement solaire haut de gamme"
        subtitle="Des composants certifiés et performants, sélectionnés pour leur fiabilité et leur rendement."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-navy/90 text-solar backdrop-blur">
                    <p.icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-solar">
                    Spécifications
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={14} className="shrink-0 text-navy" /> {s}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-solar">
                    Avantages
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {p.advantages.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        <Sparkles size={12} className="text-solar" /> {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex-1" />
                  <Button asChild variant="solar" className="w-full">
                    <Link to="/devis">
                      Demander un devis <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
