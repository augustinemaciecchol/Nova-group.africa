import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { edge } from "@/lib/data";

export function Edge() {
  return (
    <section id="edge" className="section">
      <div className="container">
        <Reveal className="center mx-auto max-w-2xl">
          <p className="section-kicker center">Our Advantage</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Our Competitive Edge</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {edge.map((item) => (
            <RevealItem key={item.title} className="glass-neo glass-neo-hover flex flex-col p-8">
              <span className="glass-neo flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink-0">{item.title}</h3>
              <p className="mt-2.5 flex-1 text-[0.9rem] leading-relaxed text-ink-2">{item.body}</p>
              <p className="mono mt-5 text-xs font-semibold uppercase tracking-wider text-teal">
                {item.tag}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
