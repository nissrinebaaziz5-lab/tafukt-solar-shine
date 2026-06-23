import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import ctaImage from "@/assets/cta-solar.jpg";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32">
      <img
        src={ctaImage}
        alt="Champ de panneaux solaires au coucher du soleil"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        width={1920}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-navy opacity-90" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Prêt à passer à l'énergie solaire ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Obtenez une étude gratuite et un devis personnalisé. Notre équipe vous répond sous 24
            heures.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="solar" size="xl">
              <Link to="/devis">
                Demander un devis <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
