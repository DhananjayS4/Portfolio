import { sections } from "../data/content"
import Reveal from "./Reveal"

export function SectionHeading({ id }) {
  const section = sections[id]
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
        <span>{section.index}</span>
        <span className="mx-2 text-white/30">/</span>
        {section.eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
        {section.title}
      </h2>
      {section.intro ? <p className="mt-4 text-base leading-7 text-mist">{section.intro}</p> : null}
    </div>
  )
}

export default function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading id={id} />
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
