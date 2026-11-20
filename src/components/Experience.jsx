import { experience } from "../data/content"
import Section from "./Section"

export default function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-5">
        {experience.map((role) => {
          const meta = [role.organization, role.period].filter(Boolean).join(" · ")
          return (
            <article key={`${role.organization}-${role.period}`} className="panel p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{role.role}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{meta}</p>
                </div>
                <p className="text-sm text-signal">{role.location}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-mist">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-white">Technologies</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {role.technologies.map((tool) => (
                  <li key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
