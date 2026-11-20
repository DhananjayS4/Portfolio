import About from "./components/About"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { ResumeBand, ResumeSheet } from "./components/Resume"
import Skills from "./components/Skills"
import { contact, personSchema } from "./data/content"

const schema = {
  ...personSchema,
  ...(contact.email ? { email: contact.email } : {}),
  ...(contact.linkedin || contact.github
    ? { sameAs: [contact.linkedin, contact.github].filter(Boolean) }
    : {}),
}

export default function App() {
  return (
    <>
      <div className="no-print">
        <a className="skip-link" href="#home">
          Skip to content
        </a>
        <div className="grain pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <ResumeBand />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <ResumeSheet />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  )
}
