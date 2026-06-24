import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SocialLinks } from "@/components/site/SocialLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tafukt Energy SARL" },
      {
        name: "description",
        content:
          "Contactez Tafukt Energy : adresse, téléphone, email et formulaire de contact. Notre équipe vous répond rapidement pour votre projet solaire.",
      },
      { property: "og:title", content: "Contact — Tafukt Energy" },
      { property: "og:description", content: "Parlons de votre projet d'énergie solaire." },
      { property: "og:url", content: "https://tafukt-solar-shine.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tafukt-solar-shine.lovable.app/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Veuillez saisir votre nom").max(80),
  prenom: z.string().trim().min(2, "Veuillez saisir votre prénom").max(80),
  telephone: z.string().trim().min(8, "Numéro invalide").max(20),
  email: z.string().trim().email("Adresse email invalide").max(255),
  sujet: z.string().trim().min(2, "Veuillez préciser le sujet").max(120),
  message: z.string().trim().min(10, "Votre message est trop court").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = { nom: "", prenom: "", telephone: "", email: "", sujet: "", message: "" };

function Contact() {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
    setSubmitted(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error("Veuillez corriger les champs en rouge.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    setData(EMPTY);
    setErrors({});
  };

  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&output=embed`;

  return (
    <Layout>
      <PageHeader
        current="Contact"
        title="Parlons de votre projet"
        subtitle="Une question, un projet ? Notre équipe est à votre écoute et vous répond rapidement."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <Reveal className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Nos coordonnées</h2>
              <p className="mt-2 text-muted-foreground">
                Retrouvez-nous ou contactez-nous directement par téléphone ou email.
              </p>
            </div>
            <ul className="space-y-5">
              <ContactRow icon={MapPin} label="Adresse" value={COMPANY.address} />
              <ContactRow icon={Phone} label="Téléphone" value={COMPANY.phone} href={`tel:${COMPANY.phoneHref}`} />
              <ContactRow icon={Mail} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
              <ContactRow icon={Clock} label="Horaires" value={COMPANY.hours} />
            </ul>
            <div>
              <p className="text-sm font-semibold text-foreground">Suivez-nous</p>
              <SocialLinks className="mt-3" variant="light" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Localisation Tafukt Energy"
                src={mapsSrc}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Nom" error={errors.nom}>
                  <Input value={data.nom} onChange={update("nom")} placeholder="Votre nom" />
                </Field>
                <Field label="Prénom" error={errors.prenom}>
                  <Input value={data.prenom} onChange={update("prenom")} placeholder="Votre prénom" />
                </Field>
                <Field label="Téléphone" error={errors.telephone}>
                  <Input value={data.telephone} onChange={update("telephone")} placeholder="+212 6 00 00 00 00" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input type="email" value={data.email} onChange={update("email")} placeholder="vous@email.com" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Sujet" error={errors.sujet}>
                    <Input value={data.sujet} onChange={update("sujet")} placeholder="Objet de votre message" />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message" error={errors.message}>
                    <Textarea rows={5} value={data.message} onChange={update("message")} placeholder="Décrivez votre besoin..." />
                  </Field>
                </div>
              </div>
              <Button type="submit" variant="solar" size="lg" className="mt-6 w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> Envoi en cours…
                  </>
                ) : (
                  <>
                    Envoyer le message <Send size={17} />
                  </>
                )}
              </Button>
              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-solar/40 bg-solar/10 px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-solar" />
                  Merci ! Votre message a bien été envoyé. Notre équipe vous répond rapidement.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-solar text-navy">
        <Icon size={22} />
      </span>
      <div>
        <p className="text-sm font-semibold text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-80">{content}</a> : content}</li>;
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
