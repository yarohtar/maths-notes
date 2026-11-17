// Runs after crawl-links (order 60), which marks unresolved internal links with class "broken"
// when its `disableBrokenWikilinks` option is on.
//   brokenLinksAsText: replace <a class="broken"> with a plain <span> (Quartz 4 behaviour)
//   newTab: "all" | "external" | "none" - which links in note content get target="_blank"
//           ("#heading" and mailto:/tel: links are never affected)
//           With "external"/"all", a small client script also gives links outside note content
//           (footer, sidebars) to other sites target="_blank".
import { visit } from "unist-util-visit"

// Links rendered by components (e.g. the footer) never pass through htmlPlugins, so handle them in the browser.
const externalLinksScript = `
document.addEventListener("nav", () => {
  for (const a of document.querySelectorAll('a[href^="http"]')) {
    if (a.target || a.host === location.host) continue
    a.target = "_blank"
    a.rel = "noopener noreferrer"
  }
})
`

export const LinkTweaks = (opts) => {
  const brokenLinksAsText = opts?.brokenLinksAsText ?? true
  const newTab = opts?.newTab ?? "all"
  return {
    name: "LinkTweaks",
    htmlPlugins() {
      return [
        () => (tree) => {
          visit(tree, "element", (node) => {
            if (node.tagName !== "a") return
            const classes = node.properties?.className ?? []
            const href = String(node.properties?.href ?? "")

            if (brokenLinksAsText && classes.includes("broken")) {
              node.tagName = "span"
              node.properties = {}
              return
            }

            if (href.startsWith("#") || /^(mailto|tel):/i.test(href)) return
            const isExternal = classes.includes("external")
            if (newTab === "all" || (newTab === "external" && isExternal)) {
              node.properties.target = "_blank"
              node.properties.rel = "noopener noreferrer"
            }
          })
        },
      ]
    },
    externalResources() {
      if (newTab === "none") return {}
      return { js: [{ script: externalLinksScript, loadTime: "afterDOMReady", contentType: "inline" }] }
    },
  }
}

export default LinkTweaks
