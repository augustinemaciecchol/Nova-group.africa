import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { csr } from "@/lib/data";

export function Csr() {
  return (
    <section id="csr" className="section">
      <div className="container">
        <Reveal className="center mx-auto max-w-2xl">
          <p className="section-kicker center">Corporate Social Responsibility</p>
          <h2 className="text-3xl font-bold sm:text-4xl">&ldquo;Prosperity for All South Sudanese&rdquo;</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {csr.map((item) => (
            <RevealItem key={item.title} className="glass-neo glass-neo-hover p-6">
              <span className="glass-neo flex h-12 w-12 items-center justify-center rounded-xl text-xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-5 text-[0.95rem] font-bold text-ink-0">{item.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-2">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
