import { ArrowUpRight } from "lucide-react"
import { certifications } from "../data/content"
import Section from "./Section"

export default function Certifications() {
  if (!certifications.length) return null

  return (
    <Section id="certifications">
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((item) => (
          <li key={`${item.name}-${item.issuer}`} className="panel p-6">
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-mist">{item.issuer}</p>
            {item.date ? <p className="mt-1 text-sm text-signal">{item.date}</p> : null}
            {item.url ? (
              <a className="btn btn-secondary mt-4" href={item.url} target="_blank" rel="noreferrer">
                View credential
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
