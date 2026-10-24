import Tile from "./Tile";
import { marquee, profile, projects } from "../lib/data";

const arrowMaze = projects[projects.length - 1];

export default function Hero() {
  return (
    <section id="home" className="wrap pb-6 pt-28 sm:pt-32">
      <div className="grid gap-4 lg:grid-cols-12">
        <Tile tone="violet" className="lg:col-span-8 lg:row-span-2">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new roles
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.name}.
            <br />
            I build <span className="grad-text">scalable backend</span> systems.
          </h1>
          <p className="soft mt-6 max-w-xl text-lg">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-solid rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold"
            >
              View projects →
            </a>
            <a
              href="/Aditya-Yogi-Resume.pdf"
              download
              className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold"
            >
              Download resume ↓
            </a>
          </div>
        </Tile>

        <Tile tone="cyan" className="lg:col-span-4" delay={0.05}>
          <div className="eyebrow">Experience</div>
          <div className="mt-3 font-display text-6xl font-bold">5+</div>
          <div className="soft">years building production software</div>
        </Tile>

        <Tile tone="pink" className="lg:col-span-4" delay={0.1}>
          <div className="eyebrow">Recognition</div>
          <div className="mt-3 font-display text-6xl font-bold">4</div>
          <div className="soft">performance awards, 2021 – 2025</div>
        </Tile>

        <Tile tone="emerald" className="lg:col-span-5" delay={0.05}>
          <div className="eyebrow">Core stack</div>
          <div className="mt-5 space-y-3">
            {[marquee, [...marquee].reverse()].map((row, r) => (
              <div
                key={r}
                className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
              >
                <div
                  className="flex w-max animate-marquee gap-2"
                  style={r === 1 ? { animationDirection: "reverse" } : undefined}
                >
                  {[...row, ...row].map((t, i) => (
                    <span key={i} className="chip whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Tile>

        <Tile tone="amber" className="lg:col-span-7" delay={0.1}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="eyebrow">Latest app · Flutter</div>
              <h3 className="mt-2 font-display text-3xl font-bold">{arrowMaze.title}</h3>
              <p className="soft mt-2 max-w-md">{arrowMaze.text}</p>
              {arrowMaze.link && (
                <a
                  href={arrowMaze.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
                >
                  {arrowMaze.link.label} ↗
                </a>
              )}
            </div>
            <div aria-hidden className="grid shrink-0 grid-cols-3 gap-1.5 font-display text-2xl text-amber-600 dark:text-amber-300/80">
              {["↗", "→", "↘", "↑", "✦", "↓", "↖", "←", "↙"].map((a, i) => (
                <span key={i} className="grid h-10 w-10 place-items-center rounded-lg border border-amber-500/30 bg-amber-400/10">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Tile>
      </div>
    </section>
  );
}
