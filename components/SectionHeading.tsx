import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-8 max-w-2xl">
      <div className="eyebrow">{kicker}</div>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="soft mt-3 text-lg">{text}</p>}
    </Reveal>
  );
}
