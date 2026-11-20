import { Download } from "lucide-react"
import {
  contact,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data/content"
import { openResume } from "../lib/resume"
import Section from "./Section"

function contactBits() {
  return [contact.email, contact.linkedin, contact.github, contact.location].filter(Boolean)
}

export function ResumeBand() {
  return (
    <Section id="resume">
      <div className="panel flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="max-w-xl">
          <p className="text-base leading-7 text-mist">
            Download <span className="text-white">Dhananjay_S_Resume.pdf</span>. It is the current one-page resume,
            with both internships, the cloud workspace, the security fabric, and the Streamlit monitoring work.
          </p>
        </div>
        <button type="button" className="btn btn-primary shrink-0" onClick={openResume}>
          <Download className="h-4 w-4" />
          Download resume
        </button>
      </div>
    </Section>
  )
}

export function ResumeSheet() {
  return (
    <article id="print-resume">
      <header className="resume-top">
        <div>
          <h1>{profile.name}</h1>
          <p className="resume-role">{profile.role}</p>
        </div>
        <p className="resume-contact">{contactBits().join(" · ")}</p>
      </header>

      <section>
        <h2>Education</h2>
        <div className="resume-block">
          <p className="resume-row">
            <strong>{education[0].title}</strong>
            <span>{education[0].result}</span>
          </p>
          <p>
            {education[0].place}. {education[0].detail}. {education[0].meta}.
          </p>
          <p>
            Class 12, {education[1].place}, {education[1].meta}: {education[1].result}. Class 10,{" "}
            {education[2].place}, {education[2].meta}: {education[2].result}.
          </p>
        </div>
      </section>

      <section>
        <h2>Technical skills</h2>
        {skillGroups.map((group) => (
          <p key={group.title} className="resume-block">
            <strong>{group.title}: </strong>
            {group.items.map((item) => item.name).join(", ")}
          </p>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((role) => (
          <div key={`${role.organization}-${role.period}`} className="resume-block">
            <p>
              <strong>{role.role}</strong> — {role.organization}, {role.period}
            </p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.title} className="resume-block">
            <p>
              <strong>{project.title}</strong> — {project.stack.join(", ")}
            </p>
            <p>{project.summary}</p>
          </div>
        ))}
      </section>
    </article>
  )
}
