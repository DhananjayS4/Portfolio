import { profile } from "../data/content"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-mist md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-white">{profile.name}</p>
        <p>Computer Science Engineering · BNM Institute of Technology</p>
        <p>© 2026</p>
      </div>
    </footer>
  )
}
