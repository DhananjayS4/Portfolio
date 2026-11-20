import { Download, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./BrandIcons"
import { contact, profile, publishReminders } from "../data/content"
import { openResume } from "../lib/resume"
import Section from "./Section"

export default function Contact() {
  const reminders = publishReminders()
  const channels = [
    contact.email
      ? { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail }
      : null,
    contact.linkedin
      ? { label: "LinkedIn", value: "View profile", href: contact.linkedin, icon: LinkedinIcon }
      : null,
    contact.github
      ? { label: "GitHub", value: "View repositories", href: contact.github, icon: GithubIcon }
      : null,
    { label: "Location", value: contact.location, href: "", icon: MapPin },
  ].filter(Boolean)

  return (
    <Section id="contact">
      <div className="max-w-3xl">
        <p className="text-base leading-7 text-mist">
          I'm always interested in connecting with people, exploring new technologies, collaborating on
          interesting projects, and discussing opportunities in software engineering, cloud computing,
          cybersecurity, and AI.
        </p>
        <p className="mt-4 text-base leading-7 text-mist">
          Whether you have an interesting project, a technical opportunity, or simply want to connect, feel
          free to reach out.
        </p>
        <p className="mt-6 font-serif text-3xl font-normal text-white md:text-4xl">
          Let's build something meaningful together.
        </p>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {channels.map((channel) => {
          const Icon = channel.icon
          const body = (
            <>
              <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
              <span className="mt-4 block text-sm text-mist">{channel.label}</span>
              <span className="mt-1 block text-base text-white">{channel.value}</span>
            </>
          )
          return (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  className="panel block h-full p-5 transition-colors hover:border-white/25"
                  {...(channel.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {body}
                </a>
              ) : (
                <div className="panel h-full p-5">{body}</div>
              )}
            </li>
          )
        })}
        <li>
          <button type="button" className="panel h-full w-full p-5 text-left hover:border-white/25" onClick={openResume}>
            <Download className="h-5 w-5 text-signal" aria-hidden="true" />
            <span className="mt-4 block text-sm text-mist">Resume</span>
            <span className="mt-1 block text-base text-white">Download Dhananjay_S_Resume.pdf</span>
          </button>
        </li>
      </ul>

      {import.meta.env.DEV && reminders.length > 0 ? (
        <aside className="mt-8 rounded-2xl border border-dashed border-aqua/40 bg-aqua/5 p-4 text-sm leading-6 text-mist">
          <p className="font-medium text-aqua">Before you publish</p>
          <p className="mt-1">
            Add {reminders.join(", ")} in <code>src/data/content.js</code>. This note only appears while the
            site is running locally.
          </p>
          {!profile.photo ? (
            <p className="mt-2">
              For the portrait, put your photo in <code>public/profile.jpg</code> and set <code>photo</code> to{" "}
              <code>"/profile.jpg"</code>.
            </p>
          ) : null}
        </aside>
      ) : null}
    </Section>
  )
}
