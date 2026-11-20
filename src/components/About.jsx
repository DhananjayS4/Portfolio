import { BrainCircuit, Cloud, Code2, Shield } from "lucide-react"
import { aboutParagraphs, focuses } from "../data/content"
import Section from "./Section"

const icons = {
  software: Code2,
  cloud: Cloud,
  security: Shield,
  ai: BrainCircuit,
}

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-mist">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {focuses.map((focus) => {
            const Icon = icons[focus.id]
            return (
              <li key={focus.id} className={`panel p-5 ${focus.id === "ai" ? "panel-ai" : ""}`}>
                <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-white">{focus.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{focus.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
