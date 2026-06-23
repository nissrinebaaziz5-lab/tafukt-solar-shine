import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Clock, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { PROJECT_CATEGORIES } from "@/data/site";
import quoteImage from "@/assets/quote.jpg";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demander un devis — Tafukt Energy SARL" },
      {
        name: "description",
        content:
          "Demandez votre devis solaire gratuit et personnalisé. Notre équipe vous répond sous 24 heures pour votre projet photovoltaïque au Maroc.",
      },
      { property: "og:title", content: "Demander un devis — Tafukt Energy" },
      { property: "og:description", content: "Étude gratuite et devis personnalisé sous 24h." },
      { property: "og:url", content: "/devis" },
      { property: "og:image", content: quoteImage },
    ],
    links: [{ rel: "canonical", href: "/devis" }],
  }),
  component: Devis,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Veuillez saisir votre nom").max(80),
  email: z.string().trim().email("Adresse email invalide").max(255),
  telephone: z.string().trim().min(8, "Numéro invalide").max(20),
  ville: z.string().trim().min(2, "Veuillez indiquer votre ville").max(80),
  type: z.string().min(1, "Sélectionnez un type de projet"),
  consommation: z.string().trim().max(60).optional().or(z.literal("")),
  surface: z.string().trim().max(60).optional().or(z.literal("")),
  description: z.string().trim().min(10, "Décrivez brièvement votre projet").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  nom: "",
  email: "",
  telephone: "",
  ville: "",
  type: "",
  consommation: "",
  surface: "",
  description: "",
};

function Devis() {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error("Veuillez compléter les champs requis.");
      return;
    }
    toast.success("Demande envoyée ! Notre équipe vous répond sous 24 heures.");
    setData(EMPTY);
    setErrors({});
  };

  return (
    <Layout>
      <PageHeader
        current="Demander un devis"
        title="Votre devis solaire gratuit"
        subtitle="Quelques informations suffisent pour démarrer votre projet. Étude personnalisée et sans engagement."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Aside */}
          <Reveal className="space-y-6">
            <img
              src={quoteImage}
              alt="Conseiller solaire Tafukt Energy"
              loading="lazy"
              width={1024}
              height={900}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="rounded-2xl bg-gradient-navy p-7 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-solar text-navy">
                  <Clock size={24} />
                </span>
                <p className="text-lg font-bold">Notre équipe vous répond sous 24 heures.</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {["Étude gratuite et sans engagement", "Devis personnalisé et transparent", "Accompagnement de A à Z"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-solar" /> {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet" error={errors.nom}>
                  <Input value={data.nom} onChange={update("nom")} placeholder="Votre nom" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input type="email" value={data.email} onChange={update("email")} placeholder="vous@email.com" />
                </Field>
                <Field label="Téléphone" error={errors.telephone}>
                  <Input value={data.telephone} onChange={update("telephone")} placeholder="+212 6 00 00 00 00" />
                </Field>
                <Field label="Ville" error={errors.ville}>
                  <Input value={data.ville} onChange={update("ville")} placeholder="Ex : Marrakech" />
                </Field>
              </div>

              <div className="mt-5">
                <Label className="text-sm font-medium">Type de projet</Label>
                <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PROJECT_CATEGORIES.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => {
                        setData((d) => ({ ...d, type: c }));
                        setErrors((er) => ({ ...er, type: undefined }));
                      }}
                      className={cn(
                        "rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200",
                        data.type === c
                          ? "border-navy bg-navy text-white shadow-card"
                          : "border-border bg-background text-foreground/70 hover:border-navy",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                {errors.type && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.type}</p>}
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Consommation mensuelle (kWh)" error={errors.consommation}>
                  <Input value={data.consommation} onChange={update("consommation")} placeholder="Ex : 600 kWh" />
                </Field>
                <Field label="Surface disponible (m²)" error={errors.surface}>
                  <Input value={data.surface} onChange={update("surface")} placeholder="Ex : 80 m²" />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Description du projet" error={errors.description}>
                  <Textarea
                    rows={5}
                    value={data.description}
                    onChange={update("description")}
                    placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                  />
                </Field>
              </div>

              <Button type="submit" variant="solar" size="lg" className="mt-6 w-full">
                Envoyer ma demande <Send size={17} />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
