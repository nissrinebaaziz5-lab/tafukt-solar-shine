import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Headset, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { StatsSection } from "@/components/site/StatsSection";
import { Testimonials } from "@/components/site/Testimonials";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaSection } from "@/components/site/CtaSection";
import { SERVICES } from "@/data/site";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tafukt Energy — Énergie solaire & photovoltaïque au Maroc" },
      {
        name: "description",
        content:
          "Tafukt Energy vous accompagne vers un avenir durable : installation de panneaux photovoltaïques, maintenance, audit énergétique et bornes de recharge au Maroc.",
      },
      { property: "og:title", content: "Tafukt Energy — L'énergie solaire, notre engagement" },
      {
        property: "og:description",
        content: "Solutions énergétiques innovantes et respectueuses de l'environnement au Maroc.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const ADVANTAGES = [
  { icon: Sparkles, title: "Solutions sur mesure", text: "Des projets conçus selon vos besoins réels et votre budget." },
  { icon: ShieldCheck, title: "Qualité et fiabilité", text: "Matériel certifié et installations garanties jusqu'à 25 ans." },
  { icon: Leaf, title: "Énergie propre et durable", text: "Réduisez votre empreinte carbone et vos factures durablement." },
  { icon: Headset, title: "Service client dédié", text: "Un accompagnement complet avant, pendant et après l'installation." },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Villa moderne équipée de panneaux solaires au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-px relative w-full pt-28 pb-16">
          <div className="max-w-3xl text-white">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-solar" /> Énergie solaire au Maroc
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
                L'énergie solaire,<br />
                <span className="text-gradient-solar">notre engagement,</span> votre avenir
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg text-white/85">
                Tafukt Energy vous accompagne vers un avenir durable grâce à des solutions
                énergétiques innovantes et respectueuses de l'environnement.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="solar" size="xl">
                  <Link to="/services">
                    Nos Services <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <Link to="/devis">Demander un devis</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">Pourquoi nous choisir</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Vos avantages avec Tafukt Energy</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="card-hover h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-solar text-navy">
                    <a.icon size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-solar">Nos services</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Une expertise solaire complète</h2>
              <p className="mt-4 text-muted-foreground">
                De l'étude à la maintenance, nous couvrons l'ensemble de votre projet énergétique.
              </p>
            </Reveal>
            <Reveal>
              <Button asChild variant="outlineNavy">
                <Link to="/services">Tous les services <ArrowRight size={16} /></Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <article className="card-hover group h-full overflow-hidden rounded-2xl bg-card shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-navy/90 text-solar backdrop-blur">
                      <s.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.description}</p>
                    <Link
                      to="/services"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-solar"
                    >
                      En savoir plus <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Engagement strip */}
      <section className="py-20 sm:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">Notre engagement</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Un partenaire de confiance pour votre transition énergétique
            </h2>
            <p className="mt-4 text-muted-foreground">
              Entreprise marocaine spécialisée dans l'énergie solaire, nous mettons notre savoir-faire
              au service des particuliers, des entreprises et des collectivités.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Équipe d'ingénieurs et techniciens certifiés",
                "Matériel haut de gamme garanti",
                "Suivi de production en temps réel",
                "Rentabilité et économies maximisées",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-solar text-navy">
                    <Check size={14} />
                  </span>
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="navy" size="lg" className="mt-8">
              <Link to="/a-propos">En savoir plus sur nous</Link>
            </Button>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            <img src={SERVICES[0].image} alt="Installation solaire" loading="lazy" width={1024} height={768} className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
            <img src={SERVICES[4].image} alt="Solutions industrielles" loading="lazy" width={1024} height={768} className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <FaqSection />
      <CtaSection />
    </Layout>
  );
}
