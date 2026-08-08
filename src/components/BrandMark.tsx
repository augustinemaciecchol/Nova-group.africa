// Traced from the Quantum Synergy Limited logo mark: five arched bars,
// the outer pair peaking at their outer edge, the inner pair nearly flat,
// and the center bar rising to a single soft point.
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 200 136"
      width={size}
      height={(size * 136) / 200}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M5,130 L5,16.4 Q20,27 35,24.8 L35,130 Z" fill="#12A3B4" />
      <path d="M45,130 L45,26.0 L75,23.3 L75,130 Z" fill="#197B9E" />
      <path d="M85,130 L85,17.8 Q100,4 115,17.5 L115,130 Z" fill="#1E4B74" />
      <path d="M125,130 L125,23.3 L155,26.0 L155,130 Z" fill="#197B9E" />
      <path d="M165,130 L165,24.8 Q180,27 195,16.4 L195,130 Z" fill="#12A3B4" />
    </svg>
  );
}
