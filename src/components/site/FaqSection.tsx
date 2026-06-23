import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "@/data/site";

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions fréquentes</h2>
          <p className="mt-4 text-muted-foreground">
            Vous avez une question ? Retrouvez les réponses aux interrogations les plus courantes sur
            nos solutions solaires.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:text-solar hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
