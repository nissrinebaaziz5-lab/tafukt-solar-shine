import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";

const ICONS = [
  { Icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
  { Icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: COMPANY.social.youtube, label: "YouTube" },
];

export function SocialLinks({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {ICONS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-full transition-all duration-300 hover:-translate-y-1",
            variant === "dark"
              ? "bg-white/10 text-white hover:bg-solar hover:text-navy"
              : "bg-navy/5 text-navy hover:bg-solar hover:text-navy",
          )}
        >
          <Icon className="h-4.5 w-4.5" size={18} />
        </a>
      ))}
    </div>
  );
}
