// Shared "site survey" chrome: the mono coordinate stamp and the
// labelled dimension rule used to hand off between sections.

export function CoordTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="coord-tag">
      <span className="dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function DimRule({ label }: { label: string }) {
  return (
    <div className="dim-rule" role="presentation">
      <span className="sr-only sm:not-sr-only">{label}</span>
    </div>
  );
}
