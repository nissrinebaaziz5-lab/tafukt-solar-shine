import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Actualités & conseils sur l'énergie solaire | Tafukt Energy" },
      {
        name: "description",
        content:
          "Articles, conseils et actualités sur l'énergie solaire, l'innovation et la transition énergétique au Maroc par les experts de Tafukt Energy.",
      },
      { property: "og:title", content: "Blog — Tafukt Energy" },
      { property: "og:description", content: "Actualités et conseils sur l'énergie solaire." },
      { property: "og:url", content: "https://tafukt-solar-shine.lovable.app/blog" },
      { property: "og:image", content: BLOG_POSTS[0].image },
    ],
    links: [{ rel: "canonical", href: "https://tafukt-solar-shine.lovable.app/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState("Tous");
  const visible = cat === "Tous" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat);

  return (
    <Layout>
      <PageHeader
        current="Blog"
        title="Actualités & conseils énergétiques"
        subtitle="Restez informé des dernières tendances de l'énergie solaire et de la transition énergétique."
      />

      <section className="py-20 sm:py-28">
        <div className="container-px">
          <Reveal className="flex flex-wrap justify-center gap-3">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  cat === c
                    ? "bg-navy text-white shadow-card"
                    : "border border-border bg-card text-foreground/70 hover:border-navy hover:text-navy",
                )}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 90}>
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-solar px-3 py-1 text-xs font-semibold text-navy">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={13} className="text-solar" /> {post.date}
                    </span>
                    <h2 className="mt-3 text-lg font-bold leading-snug">{post.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.summary}</p>
                    <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-solar">
                      Lire la suite <ArrowRight size={15} />
                    </button>
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
