import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "../data/content"
import { openResume } from "../lib/resume"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 8
      if (nearBottom) {
        setActive(navLinks[navLinks.length - 1].id)
        return
      }

      let current = ""
      for (const link of navLinks) {
        const element = document.getElementById(link.id)
        if (element && element.getBoundingClientRect().top <= 140) current = link.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass = (id) =>
    `text-sm transition-colors ${active === id ? "text-white" : "text-mist hover:text-white"}`

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#home" className="font-serif text-2xl font-normal text-white">
          {profile.name.replace(/\.$/, "")}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={linkClass(link.id)}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="btn btn-primary" onClick={openResume}>
            Resume
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base text-white hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-primary mt-3 w-full"
            onClick={() => {
              setOpen(false)
              openResume()
            }}
          >
            Download resume
          </button>
        </nav>
      ) : null}
    </header>
  )
}
