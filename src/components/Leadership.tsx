import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { board, council } from "@/lib/data";

function Avatar({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <circle cx="32" cy="24" r="12" fill="#15A3B4" />
      <path d="M12 56c0-12 9-20 20-20s20 8 20 20" fill="#15A3B4" />
    </svg>
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
          {board.map((person) => (
            <RevealItem key={person.name} className="glass-neo glass-neo-hover p-8">
              <div className="glass-neo flex h-16 w-16 items-center justify-center rounded-2xl">
                <Avatar />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-0">{person.name}</h3>
              <p className="mt-0.5 text-sm font-semibold text-teal">{person.role}</p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{person.bio}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="text-center text-xl font-bold text-ink-0">The Executive Council</h3>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.06}>
          {council.map((person) => (
            <RevealItem
              key={person.name}
              className="glass-neo glass-neo-hover flex items-start gap-4 p-6"
            >
              <div className="glass-neo flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <Avatar size={26} />
              </div>
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
