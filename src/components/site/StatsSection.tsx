import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { STATS } from "@/data/site";

export function StatsSection() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-px grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="text-center">
            <div className="text-4xl font-bold text-solar sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
