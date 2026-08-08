"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { divisions } from "@/lib/data";

const ease = [0.23, 1, 0.32, 1] as const;

export function Divisions() {
  const [activeId, setActiveId] = useState(divisions[0].id);
  const active = divisions.find((d) => d.id === activeId) ?? divisions[0];

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
            className="glass-neo flex flex-wrap justify-center gap-1.5 p-1.5"
          >
            {divisions.map((d) => {
              const isActive = d.id === activeId;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(d.id)}
                  className={`relative rounded-full px-4 py-2.5 text-[0.85rem] font-semibold transition-colors duration-200 sm:px-5 ${
                    isActive ? "text-white" : "text-ink-2 hover:text-ink-0"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="division-tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-teal to-blue"
                      transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                    />
                  )}
                  {d.tabLabel}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mt-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.32, ease }}
            >
              <div className="grid gap-2 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
                  {active.eyebrow}
                </p>
                <h3 className="text-2xl font-bold text-ink-0 sm:text-[1.65rem]">{active.title}</h3>
              </div>
              <p className="mt-2 text-[0.95rem] font-medium text-teal">
                {active.lead} <span className="text-ink-3">&middot;</span>{" "}
                <span className="text-ink-2">{active.leadRole}</span>
              </p>

              {active.quote ? (
                <p className="glass-neo glass-neo-inset mt-5 max-w-2xl border-l-2 border-teal/50 px-6 py-5 text-[1.05rem] italic leading-relaxed text-ink-1">
                  &ldquo;{active.quote}&rdquo;
                </p>
              ) : (
                <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-ink-2">
                  {active.body}
                </p>
              )}

              {active.tagline && (
                <p className="mt-3 text-[0.8rem] font-semibold uppercase tracking-wider text-ink-3">
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
