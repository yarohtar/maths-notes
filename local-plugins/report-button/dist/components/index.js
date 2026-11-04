// "Something looks off?" box with a button that reports the current page.
// The backend (server/feedback) counts at most one report per visitor per page per day.
import { h } from "preact"

const css = `
.report-button-box { margin: 2rem 0 0; padding: 0.75rem 1rem; border: 1px solid var(--lightgray); border-radius: 5px; }
.report-button-box h3 { display: inline-block; margin: 0 0 0.5rem; font-size: 1.05rem; }
.report-button-box p { margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--darkgray); }
.report-button-box button {
  display: flex; align-items: center; justify-content: center; width: 100%; height: 2.5rem;
  padding: 0 1rem; border: 1px solid var(--lightgray); border-radius: 4px;
  background: transparent; color: var(--gray); font: inherit; font-size: 1rem; font-weight: 600; cursor: pointer;
}
.report-button-box button:hover:not(:disabled) { background: var(--highlight); color: var(--dark); }
.report-button-box button:disabled { cursor: default; }
.report-button-box button.done { color: var(--tertiary); border-color: var(--tertiary); }
`

const script = `
function setupReportButton() {
  const btn = document.querySelector(".report-button-box button")
  if (!btn) return
  const label = btn.dataset.label
  btn.disabled = false
  btn.classList.remove("done")
  btn.textContent = label
  btn.onclick = async () => {
    btn.disabled = true
    btn.textContent = "Sending…"
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: document.body.dataset.slug }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "HTTP " + res.status)
      btn.classList.add("done")
      btn.textContent = "Thanks! This page is on my list."
    } catch (e) {
      btn.disabled = false
      btn.textContent = "Couldn't send (" + e.message + "). Try again?"
    }
  }
}
document.addEventListener("nav", setupReportButton)
`

const LABEL = "Click me!"

const ReportButtonComponent = ({ displayClass }) =>
  h("div", { class: ["report-button-box", displayClass].filter(Boolean).join(" ") }, [
    h("h3", null, "Something looks off?"),
    h("button", { type: "button", "data-label": LABEL }, LABEL),
    h("p", null, [
      "The button adds this page to my list of things to fix. Use it for broken links, equations not rendering correctly, etc. ",
      "Submit other issues on ",
      h("a", { href: "https://github.com/yarohtar/maths-notes/issues", target: "_blank", rel: "noopener noreferrer", class: "external" }, "GitHub"),
      ".",
    ]),
  ])

ReportButtonComponent.css = css
ReportButtonComponent.afterDOMLoaded = script

export const ReportButton = () => ReportButtonComponent
