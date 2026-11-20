import { profile } from "../data/content"

export function openResume() {
  if (profile.resumePdf) {
    const link = document.createElement("a")
    link.href = profile.resumePdf
    link.download = "Dhananjay_S_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    link.remove()
    return
  }

  const previous = document.title
  document.title = "Dhananjay_S_Resume"
  const restore = () => {
    document.title = previous
    window.removeEventListener("afterprint", restore)
  }
  window.addEventListener("afterprint", restore)
  window.print()
}
