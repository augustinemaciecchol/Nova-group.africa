import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { aboutItems, verticals } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <Reveal>
            <p className="section-kicker">Who We Are</p>
            <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
              Rooted in South Sudan, Reaching for Global Standards.
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 space-y-8">
            {aboutItems.map((item) => (
              <RevealItem key={item.title} className="border-l-2 border-teal/40 pl-5">
                <h3 className="text-lg font-semibold text-ink-0">{item.title}</h3>
                <p className="mt-1.5 text-[0.975rem] leading-relaxed text-ink-2">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="glass-neo glass-neo-hover p-8">
          <div className="glass-neo-inset flex flex-col items-center gap-1 px-6 py-8 text-center">
            <span className="font-display text-5xl font-extrabold text-accent">10</span>
            <span className="text-sm font-medium tracking-wide text-ink-2">States Covered</span>
          </div>

          <ul className="mt-7 flex flex-col gap-1">
            {verticals.map((v) => (
              <li
                key={v.label}
                className="flex items-center gap-3.5 rounded-xl px-3 py-3 text-[0.95rem] font-medium text-ink-1 transition-colors duration-200 hover:bg-white/5"
              >
                <span className="glass-neo flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base" aria-hidden="true">
                  {v.icon}
                </span>
                {v.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
