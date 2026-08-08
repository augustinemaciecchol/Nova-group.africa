"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="glass-neo absolute -right-16 top-24 h-56 w-56 rotate-45 rounded-[2.5rem] opacity-60 md:h-72 md:w-72"
          animate={reduceMotion ? undefined : { y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="glass-neo absolute -left-10 top-[38%] h-36 w-36 rotate-12 rounded-[2rem] opacity-40 md:h-44 md:w-44"
          animate={reduceMotion ? undefined : { y: [0, 16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="glass-neo absolute bottom-10 right-[18%] h-24 w-24 rotate-[20deg] rounded-3xl opacity-30"
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container relative">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          A Diversified Multi-Sector Conglomerate
        </motion.p>

        <motion.h1
          className="max-w-3xl text-[2.6rem] font-extrabold sm:text-[3.4rem] lg:text-[4rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
        >
          Building the Future,
          <br />
          <span className="text-accent">Powering Progress.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
        >
          Quantum Synergy Limited operates across five specialized verticals in the
          Republic of South Sudan — bridging international expertise with local
          resilience, from Juba to all ten states.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
        >
          <a href="#divisions" className="btn btn-primary">
            Explore Our Divisions
          </a>
          <a href="#contact" className="btn btn-outline">
            Partner With Us
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to content"
        className="glass-neo absolute bottom-8 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center text-ink-2"
        initial={{ opacity: 0 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.6, duration: 0.5 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
