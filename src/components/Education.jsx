import { education } from "../data/content"
import Section from "./Section"

export default function Education() {
  return (
    <Section id="education">
      <ol className="relative space-y-4 border-l border-white/10 pl-6 md:pl-8">
        {education.map((item) => (
          <li key={item.title} className="panel relative p-6">
            <span className="absolute top-8 -left-[1.95rem] h-3 w-3 rounded-full border border-signal bg-ink md:-left-[2.45rem]" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{item.place}</p>
                {item.detail ? <p className="mt-1 text-sm leading-6 text-mist">{item.detail}</p> : null}
                <p className="mt-2 text-sm text-signal">{item.meta}</p>
              </div>
              <p className="font-serif text-3xl font-normal text-white">{item.result}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
