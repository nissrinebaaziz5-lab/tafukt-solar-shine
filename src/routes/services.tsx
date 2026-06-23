import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Installation solaire, maintenance & audit | Tafukt Energy" },
      {
        name: "description",
        content:
          "Nos services : installation de panneaux photovoltaïques, maintenance solaire, études techniques, audit énergétique, solutions industrielles et bornes de recharge.",
      },
      { property: "og:title", content: "Nos services — Tafukt Energy" },
      { property: "og:description", content: "Une expertise solaire complète, de l'étude à la maintenance." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: SERVICES[0].image },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <PageHeader
        current="Services"
        title="Des solutions solaires pour chaque besoin"
        subtitle="Nous vous accompagnons à chaque étape, de la conception à la maintenance de votre installation."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 100}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card sm:flex-row">
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-2/5">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-solar text-navy">
                    <s.icon size={24} />
                  </div>
                  <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={15} className="shrink-0 text-solar" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex-1" />
                  <Button asChild variant="outlineNavy" className="w-fit">
                    <Link to="/devis">
                      En savoir plus <ArrowRight size={16} />
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
