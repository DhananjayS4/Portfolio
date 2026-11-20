import { ArrowDown, Download } from "lucide-react"
import { useState } from "react"
import { contact, profile, stats } from "../data/content"
import { openResume } from "../lib/resume"
import Reveal from "./Reveal"

function Portrait() {
  const [showPhoto, setShowPhoto] = useState(Boolean(profile.photo))

  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:ml-auto">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-signal/30 via-iris/25 to-aqua/25 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-signal via-iris to-aqua p-px">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] bg-panel">
          {showPhoto ? (
            <img
              src={profile.photo}
              alt="Portrait of Dhananjay S."
              className="h-full w-full object-cover"
              onError={() => setShowPhoto(false)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(157,192,255,0.32),transparent_42%),radial-gradient(circle_at_80%_85%,rgba(142,224,203,0.18),transparent_40%),linear-gradient(165deg,#171b27,#0b0d13)]">
              <p className="font-serif text-8xl font-normal leading-none text-white">DS</p>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-mist">Computer Science</p>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex justify-between gap-2 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pt-10 pb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
            <span>Software</span>
            <span>Cloud</span>
            <span>Security</span>
            <span>AI/ML</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" tabIndex={-1} className="relative overflow-hidden outline-none">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-iris/20 blur-3xl" />
      <div className="pointer-events-none absolute top-24 -left-16 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-64 w-64 rounded-full bg-aqua/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 md:px-8 md:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.8fr)] lg:pt-24">
        <Reveal immediate>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-signal">
            01 <span className="mx-2 text-white/30">/</span> {profile.greeting}
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl font-normal leading-[0.95] text-white sm:text-7xl">
            {profile.name.replace(/\.$/, "")}
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-snug text-white md:text-[1.7rem]">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-mist">{profile.role}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-mist">{profile.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white"
              >
                {pill}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="btn btn-primary" href="#projects">
              View projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact me
            </a>
            <button type="button" className="btn btn-secondary" onClick={openResume}>
              <Download className="h-4 w-4" />
              Download resume
            </button>
          </div>
          <p className="mt-4 text-sm text-mist">{profile.availability}</p>
        </Reveal>

        <Reveal immediate delay={0.08}>
          <Portrait />
        </Reveal>

        <div className="lg:col-span-2">
          <dl className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-5 sm:px-6">
                <dt className="text-xs uppercase tracking-[0.16em] text-mist">{stat.label}</dt>
                <dd className="mt-2 font-serif text-4xl font-normal text-white sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="pt-4 text-sm text-mist">BNM Institute of Technology · VTU · {contact.location}</p>
        </div>
      </div>
    </section>
  )
}
