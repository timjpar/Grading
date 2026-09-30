import Link from "next/link";
import { ArrowIcon } from "./icons";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="eyebrow-tab inline-block bg-action px-2.5 py-1 text-xs text-forest-950">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-stone-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-forest-100" : "text-stone-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  withArrow?: boolean;
};

const buttonStyles: Record<string, string> = {
  primary:
    "bg-action text-stone-900 shadow-lg hover:bg-action-dark focus-visible:outline-action",
  secondary:
    "bg-forest-700 text-white shadow-sm hover:bg-forest-800 focus-visible:outline-forest-700",
  outline:
    "border border-white/30 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const classes = `font-display inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonStyles[variant]} ${className}`;
  const isInternal = href.startsWith("/");
  const content = (
    <>
      {children}
      {withArrow && <ArrowIcon className="h-4 w-4" />}
    </>
  );
  return isInternal ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
