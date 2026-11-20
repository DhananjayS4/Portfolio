import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { projectFilters, projects } from "../data/content"
import Section from "./Section"

function ProjectArt({ kind }) {
  if (kind === "security") {
    return (
      <svg viewBox="0 0 800 220" className="h-full w-full" aria-hidden="true">
        <rect width="800" height="220" fill="#10141d" />
        <g opacity="0.9">
          {Array.from({ length: 8 }, (_, index) => (
            <line
              key={index}
              x1="0"
              x2="800"
              y1={28 + index * 24}
              y2={28 + index * 24}
              stroke="rgba(201,184,255,0.18)"
            />
          ))}
          <line x1="0" x2="800" y1="118" y2="118" stroke="#9dc0ff" strokeWidth="2" />
          <rect x="300" y="58" width="200" height="104" rx="18" fill="#171c2a" stroke="#c9b8ff" />
          <path d="M400 82l46 16v28c0 24-18 38-46 48-28-10-46-24-46-48v-28l46-16z" fill="none" stroke="#9dc0ff" strokeWidth="3" />
        </g>
      </svg>
    )
  }

  if (kind === "ai") {
    return (
      <svg viewBox="0 0 800 220" className="h-full w-full" aria-hidden="true">
        <rect width="800" height="220" fill="#10141d" />
        <g>
          {[70, 110, 150, 190, 130].map((height, index) => (
            <rect
              key={height}
              x={80 + index * 48}
              y={180 - height}
              width="26"
              height={height}
              rx="6"
              fill={index === 3 ? "#8ee0cb" : "rgba(157,192,255,0.85)"}
            />
          ))}
          <circle cx="470" cy="78" r="8" fill="#8ee0cb" />
          <circle cx="560" cy="120" r="8" fill="#9dc0ff" />
          <circle cx="650" cy="70" r="8" fill="#c9b8ff" />
          <circle cx="610" cy="168" r="8" fill="#8ee0cb" />
          <path d="M470 78 L560 120 L650 70 L610 168 L560 120" fill="none" stroke="rgba(142,224,203,0.7)" strokeWidth="2" />
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 800 220" className="h-full w-full" aria-hidden="true">
      <rect width="800" height="220" fill="#10141d" />
      <rect x="48" y="36" width="360" height="150" rx="16" fill="#171c2a" stroke="rgba(157,192,255,0.55)" />
      <rect x="72" y="60" width="150" height="12" rx="6" fill="#9dc0ff" />
      <rect x="72" y="88" width="250" height="8" rx="4" fill="rgba(255,255,255,0.22)" />
      <rect x="72" y="108" width="210" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="72" y="128" width="170" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="440" y="48" width="220" height="64" rx="14" fill="#171c2a" stroke="rgba(201,184,255,0.55)" />
      <rect x="440" y="128" width="300" height="58" rx="14" fill="#171c2a" stroke="rgba(142,224,203,0.45)" />
    </svg>
  )
}

function ProjectLinks({ project }) {
  const links = [
    project.github ? { href: project.github, label: "GitHub" } : null,
    project.demo ? { href: project.demo, label: "Live demo" } : null,
  ].filter(Boolean)

  if (!links.length) return null

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) => (
        <a key={link.label} className="btn btn-secondary" href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const visible = projects.filter((project) => filter === "All" || project.areas.includes(filter))

  return (
    <Section id="projects">
      <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => {
          const selected = filter === item
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm ${
                selected ? "bg-white text-ink" : "border border-white/15 text-mist hover:text-white"
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-6 space-y-5">
        {visible.map((project) => (
          <article key={project.title} className="panel overflow-hidden">
            <div className="h-44 border-b border-white/10 sm:h-52">
              {project.image ? (
                <img src={project.image} alt={`Interface of ${project.title}`} className="h-full w-full object-cover" />
              ) : (
                <ProjectArt kind={project.art} />
              )}
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-signal">{project.eyebrow}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-3xl font-normal leading-tight text-white md:text-4xl">
                  {project.title}
                </h3>
                {project.status ? (
                  <span className="rounded-full border border-aqua/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-aqua">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 max-w-3xl text-base leading-7 text-mist">{project.summary}</p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Problem</h4>
                  <p className="mt-2 text-sm leading-6 text-mist">{project.problem}</p>
                  <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-white">What I learned</h4>
                  <p className="mt-2 text-sm leading-6 text-mist">{project.learned}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Features</h4>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-6 text-mist">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-white">Technologies</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <li key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white">
                    {tool}
                  </li>
                ))}
              </ul>
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
