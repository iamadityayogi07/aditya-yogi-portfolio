"use client";

import { useEffect, useState } from "react";
import { nav } from "../lib/data";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const sections = nav
      .map((n) => document.getElementById(n.toLowerCase()))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="nav-surface mx-auto flex max-w-3xl items-center justify-between rounded-full px-3 py-2">
        <a
          href="#home"
          className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-sm font-bold text-white"
        >
          AY
        </a>

        <nav className="hidden items-center md:flex">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === n.toLowerCase() ? "bg-fg/10 text-fg" : "soft hover:text-fg"
              }`}
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="soft grid h-10 w-10 place-items-center rounded-full text-lg transition-colors hover:bg-fg/10 hover:text-fg"
          >
            {dark ? "☀" : "☾"}
          </button>
          <a
            href="#contact"
            className="btn-solid hidden rounded-full px-4 py-2 text-sm font-semibold md:block"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-full px-3 py-2 text-sm font-medium md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-surface mx-auto mt-2 flex max-w-3xl flex-col rounded-3xl p-2 md:hidden">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-medium hover:bg-fg/5"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
