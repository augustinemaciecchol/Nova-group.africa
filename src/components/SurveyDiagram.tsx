"use client";

import { motion, useReducedMotion } from "framer-motion";

// The hero's signature mark: a survey network wheel. Five pins — one
// per division — ringed around a center mark, drawn on like a site
// plan being inked in. The pentagon reads as five distinct verticals;
// the spokes back to center read as the "synergy" that ties them.

const CENTER = { x: 200, y: 200 };

const NODES = [
  { key: "construction", label: "C", x: 200, y: 70 },
  { key: "technology", label: "T", x: 323.6, y: 159.8 },
  { key: "media", label: "M", x: 276.4, y: 305.2 },
  { key: "finance", label: "F", x: 123.6, y: 305.2 },
  { key: "oilgas", label: "O", x: 76.4, y: 159.8 },
];

const EDGES = NODES.map((n, i) => [n, NODES[(i + 1) % NODES.length]] as const);

const gridDots = (() => {
  const dots: { x: number; y: number }[] = [];
  for (let x = 20; x <= 380; x += 40) {
    for (let y = 20; y <= 380; y += 40) {
      dots.push({ x, y });
    }
  }
  return dots;
})();

export function SurveyDiagram() {
  const reduceMotion = useReducedMotion();
  const draw = (delay: number) =>
    reduceMotion
      ? { pathLength: 1, opacity: 1 }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.1, delay, ease: [0.23, 1, 0.32, 1] as const },
        };

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-labelledby="survey-diagram-title">
      <title id="survey-diagram-title">
        Five Quantum Synergy divisions connected around a central node, arranged as a survey plan
      </title>

      {/* corner registration ticks */}
      {[
        [8, 8, 1, 0],
        [392, 8, -1, 0],
        [8, 392, 1, 0],
        [392, 392, -1, 0],
      ].map(([x, y, dx], i) => (
        <g key={i} stroke="var(--line)" strokeWidth="1" opacity="0.5">
          <line x1={x} y1={y} x2={Number(x) + Number(dx) * 14} y2={y} />
          <line x1={x} y1={y} x2={x} y2={Number(y) < 200 ? Number(y) + 14 : Number(y) - 14} />
        </g>
      ))}

      {/* faint drafting grid */}
      <g fill="var(--line)" opacity="0.22">
        {gridDots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1.1" />
        ))}
      </g>

      {/* connecting lines, drawn on */}
      <g stroke="var(--line)" strokeWidth="1.1" fill="none" opacity="0.75">
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={`edge-${a.key}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            {...draw(0.5 + i * 0.06)}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.line
            key={`spoke-${n.key}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            strokeDasharray="1 4"
            {...draw(0.9 + i * 0.06)}
          />
        ))}
      </g>

      {/* center mark */}
      <motion.g
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <circle cx={CENTER.x} cy={CENTER.y} r="20" fill="var(--blueprint-900)" stroke="var(--brass)" strokeWidth="1.5" />
        <text
          x={CENTER.x}
          y={CENTER.y + 4}
          textAnchor="middle"
          fontSize="12"
          fontFamily="var(--font-mono)"
          fontWeight="600"
          fill="var(--brass)"
          letterSpacing="0.03em"
        >
          QS
        </text>
      </motion.g>

      {/* division pins */}
      {NODES.map((n, i) => (
        <motion.g
          key={n.key}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3 + i * 0.09, ease: [0.23, 1, 0.32, 1] }}
        >
          <circle cx={n.x} cy={n.y} r="13" fill="var(--laterite)" opacity="0.16" />
          <circle cx={n.x} cy={n.y} r="7" fill="var(--laterite)" stroke="var(--blueprint-950)" strokeWidth="1.5" />
          <text
            x={n.x}
            y={n.y + 3.5}
            textAnchor="middle"
            fontSize="8.5"
            fontFamily="var(--font-mono)"
            fontWeight="700"
            fill="#fff7ef"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
