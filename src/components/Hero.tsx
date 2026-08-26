"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SurveyDiagram } from "./SurveyDiagram";
import { CoordTag } from "./Motifs";
import { divisions } from "@/lib/data";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="on-blueprint isolate relative overflow-hidden pt-32 pb-16"
      style={{
        background:
          "linear-gradient(rgba(111,179,210,0.07) 1px, transparent 1px) 0 0 / 56px 56px, linear-gradient(90deg, rgba(111,179,210,0.07) 1px, transparent 1px) 0 0 / 56px 56px, radial-gradient(60rem 40rem at 85% -10%, rgba(95,215,230,0.1), transparent 60%), radial-gradient(46rem 32rem at 8% 110%, rgba(189,80,30,0.14), transparent 60%), linear-gradient(180deg, var(--blueprint-950), var(--blueprint-900) 55%, var(--blueprint-950))",
      }}
    >

      <div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <CoordTag>04°51&rsquo;N 31°35&rsquo;E — JUBA, SOUTH SUDAN</CoordTag>
          </motion.div>

          <motion.p
            className="section-kicker mt-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
          >
            A Diversified Multi-Sector Conglomerate
          </motion.p>

          <motion.h1
            className="max-w-2xl text-[2.5rem] sm:text-[3.2rem] lg:text-[3.7rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            Building the Future,
            <br />
            <span className="text-accent">Powering Progress.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
          >
            Quantum Synergy Limited operates across five specialized verticals in the
            Republic of South Sudan — bridging international expertise with local
            resilience, from Juba to all ten states.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.26 }}
          >
            <a href="#divisions" className="btn btn-primary">
              Explore Our Divisions
            </a>
            <a href="#contact" className="btn btn-outline">
              Partner With Us
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[420px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          <SurveyDiagram />
        </motion.div>
      </div>

      <motion.div
        className="container mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 1.6 }}
      >
        <div className="dim-rule mb-5" aria-hidden="true">
          <span>Site Plan</span>
        </div>
        <ul className="mono flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] tracking-wider text-ink-3">
          {divisions.map((d, i) => (
            <li key={d.id} className="flex items-center gap-2">
              <span className="text-brass">0{i + 1}</span>
              <span className="uppercase">{d.tabLabel}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to content"
        className="glass-neo absolute bottom-6 left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center text-ink-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8, duration: 0.5 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
