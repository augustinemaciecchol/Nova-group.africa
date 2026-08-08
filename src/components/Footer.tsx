import Image from "next/image";
import { BrandMark } from "./BrandMark";

const divisionLinks = [
  { href: "#construction", label: "Construction" },
  { href: "#technology", label: "Technology" },
  { href: "#media", label: "Media" },
  { href: "#finance", label: "Finance" },
  { href: "#oilgas", label: "Oil & Gas" },
];

const companyLinks = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#csr", label: "CSR" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="glass-panel border-t border-[rgba(20,45,80,0.08)]">
      <div className="container pt-16">
        <div className="brand-card flex flex-col items-center gap-8 p-8 text-center sm:p-10 md:flex-row md:items-center md:text-left">
          <Image
            src="/brand/quantum-synergy-logo.png"
            alt="Quantum Synergy Limited logo"
            className="h-24 w-auto shrink-0 sm:h-28"
            width={1080}
            height={871}
            priority={false}
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold" style={{ color: "var(--brand-ink)" }}>
              Brand Assets
            </h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed" style={{ color: "rgba(9,41,86,0.72)" }}>
              Official Quantum Synergy Limited logo files for press, partners, and
              procurement documentation.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="/brand/quantum-synergy-logo.png" download className="btn btn-primary">
              Download Logo (PNG)
            </a>
            <a href="/brand/quantum-synergy-mark.svg" download className="btn btn-ghost-light">
              Download Mark (SVG)
            </a>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-12 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink-0">
              QUANTUM<span className="text-accent">SYNERGY</span>
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ink-3">
            Quantum Synergy Limited &mdash; Where Vision Meets Execution.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-3">Divisions</h5>
            <ul className="mt-4 flex flex-col gap-2.5">
              {divisionLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-2 transition-colors hover:text-teal">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-3">Company</h5>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-2 transition-colors hover:text-teal">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(20,45,80,0.08)]">
        <div className="container py-6 text-center text-xs text-ink-3">
          &copy; {new Date().getFullYear()} Quantum Synergy Limited. All rights reserved. &middot; Republic of South Sudan
        </div>
      </div>
    </footer>
  );
}
