import SectionHeading from "./SectionHeading";
import Tile, { Tone } from "./Tile";
import { awards, education, experience, profile, projects, skills } from "../lib/data";

const skillLayout: { span: string; tone: Tone }[] = [
  { span: "lg:col-span-4", tone: "violet" },
  { span: "lg:col-span-2", tone: "cyan" },
  { span: "lg:col-span-2", tone: "pink" },
  { span: "lg:col-span-4", tone: "amber" },
  { span: "lg:col-span-2", tone: "emerald" },
  { span: "lg:col-span-2", tone: "blue" },
  { span: "lg:col-span-2", tone: "pink" },
];

const projectLayout: { span: string; tone: Tone }[] = [
  { span: "lg:col-span-4", tone: "violet" },
  { span: "lg:col-span-2", tone: "cyan" },
  { span: "lg:col-span-2", tone: "pink" },
  { span: "lg:col-span-2", tone: "emerald" },
  { span: "lg:col-span-2", tone: "blue" },
  { span: "lg:col-span-3", tone: "violet" },
  { span: "lg:col-span-3", tone: "amber" },
];

const awardTones: Tone[] = ["amber", "pink", "cyan", "emerald"];

export function About() {
  return (
    <section id="about" className="wrap py-14">
      <Tile tone="blue">
        <div className="grid gap-6 md:grid-cols-[14rem_1fr]">
          <div>
            <div className="eyebrow">About me</div>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
              A backend-focused developer.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-body">{profile.about}</p>
        </div>
      </Tile>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="wrap py-14">
      <SectionHeading
        kicker="Skills"
        title="Technical toolbox"
        text="A practical backend-focused stack covering application development, integrations, databases, messaging and delivery."
      />
      <div className="grid gap-4 lg:grid-cols-6">
        {skills.map((s, i) => (
          <Tile key={s.title} tone={skillLayout[i].tone} className={skillLayout[i].span} delay={(i % 3) * 0.06}>
            <h3 className="font-display text-2xl font-bold">{s.title}</h3>
            <p className="soft mt-3">{s.text}</p>
            {s.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Tile>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const tones: Tone[] = ["cyan", "violet"];
  return (
    <section id="experience" className="wrap py-14">
      <SectionHeading
        kicker="Experience"
        title="Where I've worked"
        text="Private aviation, SaaS platforms, high-volume messaging and business applications."
      />
      <div className="grid gap-4">
        {experience.map((e, i) => (
          <Tile key={e.date} tone={tones[i % 2]}>
            <div className="grid gap-6 md:grid-cols-[15rem_1fr]">
              <div>
                <span className="chip">{e.date}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{e.title}</h3>
                <div className="soft mt-1">{e.company}</div>
              </div>
              <ul className="space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-body">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--tone))]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="wrap py-14">
      <SectionHeading
        kicker="Projects"
        title="Selected work"
        text="Across aviation, SaaS billing, messaging, commerce, learning, operations and mobile gaming."
      />
      <div className="grid gap-4 lg:grid-cols-6">
        {projects.map((p, i) => (
          <Tile key={p.num} tone={projectLayout[i].tone} className={projectLayout[i].span} delay={(i % 3) * 0.06}>
            <div className="flex items-center justify-between">
              <span className="eyebrow">{p.category}</span>
              <span className="font-mono text-xs faint">{p.num}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug">{p.title}</h3>
            <p className="soft mt-3">{p.text}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-body2">
              {p.roles.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="tone-text">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-amber-300 px-4 py-1 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
                >
                  {p.link.label} ↗
                </a>
              )}
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards" className="wrap py-14">
      <SectionHeading
        kicker="Awards & education"
        title="Recognition"
        text="Recognition for backend performance, accuracy, innovation and overall contribution."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Tile key={a.title} tone={awardTones[i]} delay={i * 0.05}>
            <div className="font-display text-5xl font-bold tone-text">{a.year}</div>
            <h3 className="mt-3 font-display text-lg font-bold leading-snug">{a.title}</h3>
            <p className="soft mt-1 text-sm">{a.org}</p>
          </Tile>
        ))}
        <Tile tone="blue" className="sm:col-span-2 lg:col-span-4">
          <div className="eyebrow">Education</div>
          <h3 className="mt-2 font-display text-xl font-bold">{education.degree}</h3>
          <p className="soft mt-1">{education.detail}</p>
        </Tile>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="wrap py-14">
      <Tile tone="pink">
        <div className="py-6 text-center sm:py-12">
          <div className="eyebrow">Let&apos;s build something reliable</div>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Open to <span className="grad-text">senior backend</span> opportunities.
          </h2>
          <p className="soft mx-auto mt-5 max-w-xl text-lg">
            Laravel, PHP, backend development, API integration and software development roles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-solid rounded-full px-7 py-3.5 font-semibold"
            >
              Email me
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="btn-ghost rounded-full px-7 py-3.5 font-semibold"
            >
              Call me
            </a>
            <a
              href="/Aditya-Yogi-Resume.pdf"
              download
              className="btn-ghost rounded-full px-7 py-3.5 font-semibold"
            >
              Download resume ↓
            </a>
          </div>
        </div>
      </Tile>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap py-10 text-center text-sm faint">
      © {new Date().getFullYear()} {profile.name} · {profile.role}
    </footer>
  );
}
