import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-14 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${tone === "light" ? "text-primary" : "text-primary"}`}
    >
      <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="tech-grid border-b border-hairline-dark bg-ink pb-14 pt-28 text-ink-foreground md:pb-24 md:pt-44">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-3xl font-extrabold uppercase leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro ? <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base md:text-lg">{intro}</p> : null}
      </Container>
    </header>
  );
}
