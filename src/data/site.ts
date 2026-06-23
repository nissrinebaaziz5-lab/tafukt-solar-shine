import {
  Sun,
  Wrench,
  ClipboardList,
  Gauge,
  Factory,
  PlugZap,
  BatteryCharging,
  Cpu,
  Activity,
  PanelTop,
  type LucideIcon,
} from "lucide-react";

import serviceInstall from "@/assets/service-install.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceStudies from "@/assets/service-studies.jpg";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceEv from "@/assets/service-ev.jpg";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

import productPanel from "@/assets/product-panel.jpg";
import productBattery from "@/assets/product-battery.jpg";
import productInverter from "@/assets/product-inverter.jpg";
import productMonitoring from "@/assets/product-monitoring.jpg";
import productCharger from "@/assets/product-charger.jpg";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Produits", to: "/produits" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const COMPANY = {
  name: "Tafukt Energy SARL",
  short: "Tafukt Energy",
  email: "contact@tafuktenergy.ma",
  phone: "+212 5 24 00 00 00",
  phoneHref: "+212524000000",
  address: "Avenue Mohammed VI, Marrakech 40000, Maroc",
  hours: "Lun – Ven : 8h30 – 18h00",
  mapsQuery: "Avenue Mohammed VI, Marrakech, Maroc",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export interface ServiceItem {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "installation-photovoltaique",
    title: "Installation de panneaux photovoltaïques",
    icon: Sun,
    image: serviceInstall,
    description:
      "Conception et installation de systèmes solaires photovoltaïques sur mesure pour particuliers, entreprises et industries.",
    benefits: ["Étude personnalisée", "Matériel certifié Tier 1", "Garantie 25 ans", "Rentabilité optimisée"],
  },
  {
    slug: "maintenance-solaire",
    title: "Maintenance solaire",
    icon: Wrench,
    image: serviceMaintenance,
    description:
      "Contrats de maintenance préventive et corrective pour garantir la performance et la longévité de vos installations.",
    benefits: ["Nettoyage professionnel", "Diagnostic complet", "Intervention rapide", "Rapport de performance"],
  },
  {
    slug: "etudes-techniques",
    title: "Études techniques",
    icon: ClipboardList,
    image: serviceStudies,
    description:
      "Études de faisabilité, dimensionnement et simulation de production pour des projets fiables et performants.",
    benefits: ["Dimensionnement précis", "Simulation de production", "Plans techniques", "Conformité réglementaire"],
  },
  {
    slug: "audit-energetique",
    title: "Audit énergétique",
    icon: Gauge,
    image: serviceAudit,
    description:
      "Analyse complète de votre consommation pour identifier les économies possibles et optimiser votre efficacité.",
    benefits: ["Analyse de consommation", "Plan d'économies", "Thermographie", "Recommandations chiffrées"],
  },
  {
    slug: "solutions-electriques-industrielles",
    title: "Solutions électriques industrielles",
    icon: Factory,
    image: serviceIndustrial,
    description:
      "Installations électriques industrielles, armoires de distribution et solutions haute puissance sur mesure.",
    benefits: ["Haute puissance", "Sécurité renforcée", "Normes internationales", "Supervision intégrée"],
  },
  {
    slug: "bornes-de-recharge",
    title: "Bornes de recharge pour véhicules électriques",
    icon: PlugZap,
    image: serviceEv,
    description:
      "Installation de bornes de recharge intelligentes pour résidences, entreprises et espaces publics.",
    benefits: ["Recharge rapide", "Gestion intelligente", "Compatible solaire", "Installation clé en main"],
  },
];

export type ProjectCategory = "Résidentiel" | "Industriel" | "Agricole" | "Commercial";

export interface ProjectItem {
  name: string;
  category: ProjectCategory;
  city: string;
  power: string;
  description: string;
  image: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Résidentiel",
  "Industriel",
  "Agricole",
  "Commercial",
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "Villa Atlas",
    category: "Résidentiel",
    city: "Marrakech",
    power: "12 kWc",
    description: "Installation résidentielle autoconsommation avec stockage pour une villa de prestige.",
    image: project1,
  },
  {
    name: "Plateforme Logistique",
    category: "Industriel",
    city: "Casablanca",
    power: "850 kWc",
    description: "Toiture solaire industrielle couvrant 70% des besoins énergétiques de l'entrepôt.",
    image: project2,
  },
  {
    name: "Domaine Agricole Souss",
    category: "Agricole",
    city: "Settat",
    power: "180 kWc",
    description: "Pompage solaire et irrigation intelligente pour une exploitation agricole durable.",
    image: project3,
  },
  {
    name: "Centre Commercial Anfa",
    category: "Commercial",
    city: "Rabat",
    power: "320 kWc",
    description: "Ombrières solaires sur parking et alimentation des bornes de recharge.",
    image: project4,
  },
  {
    name: "Centrale Solaire Sud",
    category: "Industriel",
    city: "Ouarzazate",
    power: "2,4 MWc",
    description: "Centrale au sol raccordée au réseau pour une production à grande échelle.",
    image: project5,
  },
  {
    name: "Résidence Océane",
    category: "Résidentiel",
    city: "Agadir",
    power: "9 kWc",
    description: "Solution clé en main pour une résidence côtière à haute efficacité énergétique.",
    image: project6,
  },
];

export interface ProductItem {
  name: string;
  image: string;
  icon: LucideIcon;
  description: string;
  specs: string[];
  advantages: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    name: "Panneaux photovoltaïques",
    image: productPanel,
    icon: PanelTop,
    description: "Modules monocristallins haut rendement conçus pour le climat marocain.",
    specs: ["Puissance 450 – 600 Wc", "Rendement jusqu'à 22,5%", "Garantie produit 25 ans", "Tolérance haute température"],
    advantages: ["Rendement maximal", "Durabilité extrême", "Faible dégradation"],
  },
  {
    name: "Batteries de stockage",
    image: productBattery,
    icon: BatteryCharging,
    description: "Batteries lithium-ion pour stocker l'énergie et assurer votre autonomie.",
    specs: ["Capacité 5 – 15 kWh", "6000+ cycles", "Profondeur de décharge 95%", "Monitoring intégré"],
    advantages: ["Autonomie nocturne", "Longue durée de vie", "Installation compacte"],
  },
  {
    name: "Onduleurs",
    image: productInverter,
    icon: Cpu,
    description: "Onduleurs hybrides intelligents pour une conversion optimale de l'énergie.",
    specs: ["Rendement 98,4%", "Hybride & réseau", "WiFi intégré", "Protection multi-MPPT"],
    advantages: ["Conversion optimale", "Pilotage à distance", "Compatibilité totale"],
  },
  {
    name: "Systèmes de monitoring",
    image: productMonitoring,
    icon: Activity,
    description: "Supervision en temps réel de votre production et consommation via application.",
    specs: ["Suivi temps réel", "Application mobile", "Alertes automatiques", "Historique détaillé"],
    advantages: ["Contrôle total", "Optimisation continue", "Détection des pannes"],
  },
  {
    name: "Bornes de recharge",
    image: productCharger,
    icon: PlugZap,
    description: "Bornes de recharge intelligentes compatibles avec votre installation solaire.",
    specs: ["Puissance 7 – 22 kW", "Recharge intelligente", "Compatible solaire", "Connectée"],
    advantages: ["Recharge rapide", "Pilotage intelligent", "Énergie 100% verte"],
  },
];

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
}

export const BLOG_CATEGORIES = [
  "Tous",
  "Énergie solaire",
  "Innovation",
  "Conseils énergétiques",
  "Transition énergétique",
  "Actualités",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Pourquoi investir dans le solaire au Maroc en 2026 ?",
    category: "Énergie solaire",
    date: "12 juin 2026",
    summary:
      "Le Maroc bénéficie d'un ensoleillement exceptionnel. Découvrez pourquoi le photovoltaïque est l'investissement le plus rentable.",
    image: blog1,
  },
  {
    title: "Maison intelligente : coupler solaire et domotique",
    category: "Innovation",
    date: "28 mai 2026",
    summary:
      "Comment l'intelligence artificielle et le stockage transforment la gestion énergétique de votre habitat.",
    image: blog2,
  },
  {
    title: "Transition énergétique : le rôle du citoyen",
    category: "Transition énergétique",
    date: "15 mai 2026",
    summary:
      "Chaque installation compte. Le point sur la contribution des particuliers à un avenir bas carbone.",
    image: blog3,
  },
  {
    title: "5 astuces pour réduire votre facture d'électricité",
    category: "Conseils énergétiques",
    date: "2 mai 2026",
    summary:
      "Des gestes simples et des solutions concrètes pour optimiser votre consommation et économiser durablement.",
    image: blog4,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Yassine El Amrani",
    role: "Propriétaire, Marrakech",
    quote:
      "Installation impeccable et équipe très professionnelle. Ma facture d'électricité a chuté de 80% dès le premier mois.",
    rating: 5,
  },
  {
    name: "Fatima Zahra Bennani",
    role: "Directrice industrielle, Casablanca",
    quote:
      "Tafukt Energy a géré notre projet de A à Z. Délais respectés et accompagnement remarquable. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Karim Tazi",
    role: "Exploitant agricole, Settat",
    quote:
      "Le système de pompage solaire a transformé notre exploitation. Un vrai partenaire de confiance et à l'écoute.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Combien coûte une installation solaire ?",
    a: "Le prix dépend de votre consommation, de la surface disponible et du type de projet. Nous réalisons une étude gratuite et un devis personnalisé sous 24 heures.",
  },
  {
    q: "Quel est le délai d'installation ?",
    a: "Pour une installation résidentielle, comptez généralement 1 à 3 jours après validation de l'étude technique. Les projets industriels font l'objet d'un planning dédié.",
  },
  {
    q: "Quelle est la durée de vie des panneaux ?",
    a: "Nos panneaux sont garantis 25 ans avec une durée de vie réelle pouvant dépasser 30 ans. La dégradation annuelle est inférieure à 0,5%.",
  },
  {
    q: "Puis-je revendre mon surplus d'énergie ?",
    a: "Oui, selon le cadre réglementaire en vigueur. Nous vous accompagnons dans toutes les démarches administratives liées à votre projet.",
  },
  {
    q: "Proposez-vous un service de maintenance ?",
    a: "Absolument. Nous proposons des contrats de maintenance préventive et corrective pour assurer une performance optimale dans la durée.",
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projets réalisés" },
  { value: 95, suffix: "%", label: "Satisfaction client" },
  { value: 10, suffix: " MW", label: "Installés" },
  { value: 24, suffix: "h", label: "Délai de réponse" },
];
