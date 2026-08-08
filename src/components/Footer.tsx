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
    <footer className="glass-panel border-t border-white/5">
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

      <div className="border-t border-white/5">
        <div className="container py-6 text-center text-xs text-ink-3">
          &copy; {new Date().getFullYear()} Quantum Synergy Limited. All rights reserved. &middot; Republic of South Sudan
        </div>
      </div>
    </footer>
  );
}
