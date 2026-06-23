import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Essayez de rafraîchir ou revenez à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tafukt Energy — Solutions d'énergie solaire au Maroc" },
      {
        name: "description",
        content:
          "Tafukt Energy SARL : installation de panneaux photovoltaïques, maintenance solaire, audit énergétique et projets d'énergie renouvelable au Maroc.",
      },
      { name: "author", content: "Tafukt Energy SARL" },
      { property: "og:title", content: "Tafukt Energy — Solutions d'énergie solaire au Maroc" },
      {
        property: "og:description",
        content:
          "Solutions énergétiques innovantes et durables : photovoltaïque, maintenance, audit énergétique et bornes de recharge.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tafukt Energy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tafukt Energy — Solutions d'énergie solaire au Maroc" },
      { name: "description", content: "A premium corporate website for Tafukt Energy SARL, offering solar energy solutions and renewable energy projects." },
      { property: "og:description", content: "A premium corporate website for Tafukt Energy SARL, offering solar energy solutions and renewable energy projects." },
      { name: "twitter:description", content: "A premium corporate website for Tafukt Energy SARL, offering solar energy solutions and renewable energy projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ad5c0569-d17d-4c77-8ab1-6886abaf49b8/id-preview-19022851--47fce645-6a17-4dad-9044-6effaa652e11.lovable.app-1782177280864.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ad5c0569-d17d-4c77-8ab1-6886abaf49b8/id-preview-19022851--47fce645-6a17-4dad-9044-6effaa652e11.lovable.app-1782177280864.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-180.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tafukt Energy SARL",
          description: "Solutions d'énergie solaire et renouvelable au Maroc.",
          areaServed: "MA",
          knowsAbout: [
            "Énergie solaire",
            "Panneaux photovoltaïques",
            "Maintenance solaire",
            "Audit énergétique",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
