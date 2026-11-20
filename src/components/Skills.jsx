import { skillGroups } from "../data/content"
import Section from "./Section"

const levelStyle = {
  used: { label: "Used in projects", dot: "bg-signal" },
  exposure: { label: "Practical exposure", dot: "bg-iris" },
  learning: { label: "Actively learning", dot: "bg-aqua" },
}

export default function Skills() {
  return (
    <Section id="skills">
      <ul className="mb-6 flex flex-col gap-3 text-sm text-mist sm:flex-row sm:flex-wrap sm:gap-x-6">
        {Object.values(levelStyle).map((level) => (
          <li key={level.label} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${level.dot}`} aria-hidden="true" />
            {level.label}
          </li>
        ))}
      </ul>

      <ul className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <li key={group.title} className={group.featured ? "md:col-span-2" : undefined}>
            <article className={`panel h-full p-6 md:p-7 ${group.featured ? "panel-ai" : ""}`}>
              <div className={group.featured ? "md:grid md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-start md:gap-10" : ""}>
                <div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{group.summary}</p>
                </div>
                <ul className={`${group.featured ? "mt-5 md:mt-0" : "mt-5"} flex flex-wrap gap-2`}>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span
                        title={levelStyle[item.level].label}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/50 px-3 py-1.5 text-sm text-white"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${levelStyle[item.level].dot}`} aria-hidden="true" />
                        {item.name}
                        <span className="sr-only">, {levelStyle[item.level].label}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
