"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { divisions } from "@/lib/data";

const ease = [0.23, 1, 0.32, 1] as const;

export function Divisions() {
  const [activeId, setActiveId] = useState(divisions[0].id);
  const active = divisions.find((d) => d.id === activeId) ?? divisions[0];
  const activeIndex = divisions.findIndex((d) => d.id === activeId);

  return (
    <section id="divisions" className="section">
      <div className="container">
        <Reveal className="center mx-auto max-w-2xl">
          <p className="section-kicker center">What We Do</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Five Divisions. One Synergy.</h2>
          <p className="section-lead center mt-4">
            Integrated turnkey capability across the sectors that power South Sudan&rsquo;s growth.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Business Divisions"
            className="flex flex-wrap justify-center gap-2"
          >
            {divisions.map((d, i) => {
              const isActive = d.id === activeId;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(d.id)}
                  className={`mono flex items-center gap-2 rounded-full border px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "border-laterite bg-laterite text-[#fff7ef]"
                      : "border-[var(--glass-border-hi)] text-ink-2 hover:border-teal hover:text-ink-0"
                  }`}
                >
                  <span className={isActive ? "opacity-80" : "text-brass"}>0{i + 1}</span>
                  {d.tabLabel}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mt-10 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.32, ease }}
              className="on-blueprint relative overflow-hidden rounded-2xl px-6 py-9 sm:px-10 sm:py-11"
              style={{ background: "linear-gradient(155deg, var(--blueprint-950), var(--blueprint-900))" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-[var(--glass-border)] pb-6">
                  <div className="grid gap-2 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-4">
                    <p className="mono text-xs font-semibold uppercase tracking-widest text-ink-3">
                      {active.eyebrow}
                    </p>
                    <h3 className="text-2xl font-bold text-ink-0 sm:text-[1.65rem]">{active.title}</h3>
                  </div>
                  <p className="mono text-xs tracking-wider text-brass">
                    SHEET 0{activeIndex + 1} / 0{divisions.length}
                  </p>
                </div>

                <p className="mt-6 text-[0.95rem] font-medium text-teal">
                  {active.lead} <span className="text-ink-3">&middot;</span>{" "}
                  <span className="text-ink-2">{active.leadRole}</span>
                </p>

                {active.quote ? (
                  <p className="mt-5 max-w-2xl border-l-2 border-brass/60 pl-6 text-[1.05rem] italic leading-relaxed text-ink-1">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                ) : (
                  <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-ink-2">
                    {active.body}
                  </p>
                )}

                {active.tagline && (
                  <p className="mono mt-3 text-[0.78rem] font-semibold uppercase tracking-wider text-ink-3">
                    {active.tagline}
                  </p>
                )}

                <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
                  {active.cards.map((card) => (
                    <RevealItem key={card.title} className="glass-neo glass-neo-hover p-5">
                      <h4 className="text-[0.95rem] font-semibold text-ink-0">{card.title}</h4>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-2">{card.body}</p>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
