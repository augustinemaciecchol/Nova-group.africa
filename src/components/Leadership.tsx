import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { board, council } from "@/lib/data";

// Initials monogram standing in for a portrait — set inside a badge
// shaped like a site-access card, notch and all.
function Badge({
  name,
  accent = "brass",
  size = "lg",
}: {
  name: string;
  accent?: "brass" | "teal";
  size?: "lg" | "sm";
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border font-bold ${
        size === "lg" ? "h-14 w-14 text-[1.05rem]" : "h-11 w-11 text-[0.85rem]"
      }`}
      style={{
        borderColor: accent === "brass" ? "var(--brass)" : "var(--brand-teal)",
        color: accent === "brass" ? "var(--brass)" : "var(--brand-teal)",
        background: accent === "brass" ? "var(--brass-soft)" : "rgba(20,160,178,0.1)",
      }}
    >
      {initials}
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal className="center mx-auto max-w-2xl">
          <p className="section-kicker center">Governance</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Board of Directors &amp; Executive Leadership</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {board.map((person, i) => (
            <RevealItem key={person.name} className="glass-neo glass-neo-hover relative overflow-hidden p-8">
              <span
                aria-hidden="true"
                className="mono absolute right-6 top-7 text-[0.68rem] tracking-widest text-ink-3"
              >
                ID&nbsp;0{i + 1}
              </span>
              <Badge name={person.name} accent="brass" />
              <h3 className="mt-5 text-xl font-bold text-ink-0">{person.name}</h3>
              <p className="mt-0.5 text-sm font-semibold text-teal">{person.role}</p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{person.bio}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16">
          <div className="dim-rule">
            <span>Executive Council</span>
          </div>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.06}>
          {council.map((person, i) => (
            <RevealItem
              key={person.name}
              className="glass-neo glass-neo-hover relative flex items-start gap-4 p-6"
            >
              <span
                aria-hidden="true"
                className="mono absolute right-5 top-5 text-[0.65rem] tracking-widest text-ink-3"
              >
                ID&nbsp;{String(i + 3).padStart(2, "0")}
              </span>
              <Badge name={person.name} accent="teal" size="sm" />
              <div>
                <h4 className="font-semibold text-ink-0">{person.name}</h4>
                <p className="text-[0.8rem] font-semibold text-teal">{person.role}</p>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-2">{person.bio}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
