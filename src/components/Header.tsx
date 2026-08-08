"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "./BrandMark";
import { nav } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? "glass-panel border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink-0">
            QUANTUM<span className="text-accent">SYNERGY</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-2 transition-colors duration-200 hover:text-ink-0"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !py-2.5 !px-5 !text-[0.85rem]">
            Partner With Us
          </a>
        </nav>

        <button
          className="glass-neo flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <motion.span
              className="absolute left-0 top-0 h-[2px] w-4 rounded-full bg-ink-0"
              animate={open ? { rotate: 45, top: "6px" } : { rotate: 0, top: "0px" }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            />
            <motion.span
              className="absolute left-0 top-[6px] h-[2px] w-4 rounded-full bg-ink-0"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 top-3 h-[2px] w-4 rounded-full bg-ink-0"
              animate={open ? { rotate: -45, top: "6px" } : { rotate: 0, top: "12px" }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="glass-panel border-b border-white/5 px-6 pb-6 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-2 py-3 text-[0.95rem] font-medium text-ink-1 transition-colors hover:bg-white/5 hover:text-ink-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 justify-center"
              >
                Partner With Us
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
