import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Lightbulb, Award, ShieldCheck, Leaf } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { StatsSection } from "@/components/site/StatsSection";
import { CtaSection } from "@/components/site/CtaSection";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Tafukt Energy SARL" },
      {
        name: "description",
        content:
          "Découvrez Tafukt Energy, entreprise marocaine spécialisée dans l'énergie solaire : notre histoire, notre mission, notre vision et nos valeurs.",
      },
      { property: "og:title", content: "À propos — Tafukt Energy" },
      { property: "og:description", content: "Notre histoire, mission, vision et valeurs." },
      { property: "og:url", content: "/a-propos" },
      { property: "og:image", content: aboutTeam },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Lightbulb, title: "Innovation", text: "Nous adoptons les technologies les plus performantes du marché." },
  { icon: Award, title: "Qualité", text: "Un niveau d'exigence élevé sur chaque installation réalisée." },
  { icon: ShieldCheck, title: "Confiance", text: "Transparence et engagement à chaque étape de votre projet." },
  { icon: Leaf, title: "Développement durable", text: "Un impact positif et durable pour les générations futures." },
];

const TEAM = [
  { name: "Omar Lahlou", role: "Directeur Général" },
  { name: "Salma Idrissi", role: "Ingénieure Solaire" },
  { name: "Hamza Cherkaoui", role: "Chef de Projets" },
  { name: "Nadia Bouzid", role: "Responsable Client" },
];

function About() {
  return (
    <Layout>
      <PageHeader
        current="À propos"
        title="Engagés pour un Maroc plus solaire"
        subtitle="Tafukt Energy SARL est une entreprise marocaine dédiée à l'énergie renouvelable et à un avenir durable."
      />

      {/* Histoire */}
      <section className="py-20 sm:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutTeam}
              alt="Ingénieurs travaillant sur une installation solaire"
              loading="lazy"
              width={1280}
              height={854}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">Notre histoire</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Une expertise née de la passion du solaire</h2>
            <p className="mt-5 text-muted-foreground">
              Fondée par des ingénieurs passionnés, Tafukt Energy s'est imposée comme un acteur de
              référence de l'énergie solaire au Maroc. Le nom « Tafukt » signifie « soleil » en
              amazigh — un hommage à la ressource la plus abondante de notre pays.
            </p>
            <p className="mt-4 text-muted-foreground">
              Depuis nos débuts, nous avons accompagné des dizaines de particuliers, d'entreprises et
              d'exploitations agricoles dans leur transition énergétique, avec une seule ambition :
              rendre l'énergie propre accessible, fiable et rentable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-hover h-full rounded-3xl bg-card p-9 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-solar)] text-navy">
                <Target size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Notre mission</h3>
              <p className="mt-3 text-muted-foreground">
                Fournir des solutions solaires durables et innovantes, parfaitement adaptées aux
                besoins de chaque client, tout en garantissant performance, fiabilité et économies à
                long terme.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-hover h-full rounded-3xl bg-card p-9 shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-solar">
                <Eye size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Notre vision</h3>
              <p className="mt-3 text-muted-foreground">
                Contribuer activement à la transition énergétique du Maroc et bâtir un avenir plus
                vert, en faisant de l'énergie solaire un réflexe pour tous.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">Nos valeurs</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce qui nous guide au quotidien</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card-hover h-full rounded-2xl border border-border bg-card p-7 text-center shadow-card">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-solar)] text-navy">
                    <v.icon size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">Notre équipe</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Des experts à votre service</h2>
            <p className="mt-4 text-muted-foreground">
              Une équipe pluridisciplinaire d'ingénieurs et de techniciens engagés.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="card-hover rounded-2xl border border-border bg-card p-7 text-center shadow-card">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--gradient-navy)] text-2xl font-bold text-solar">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-solar">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
