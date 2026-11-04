// Runs after crawl-links (order 60), which marks unresolved internal links with class "broken"
// when its `disableBrokenWikilinks` option is on.
//   brokenLinksAsText: replace <a class="broken"> with a plain <span> (Quartz 4 behaviour)
//   newTab: "all" | "external" | "none" - which links in note content get target="_blank"
//           ("#heading" links on the same page are never affected)
import { visit } from "unist-util-visit"

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

            if (href.startsWith("#")) return
            const isExternal = classes.includes("external")
            if (newTab === "all" || (newTab === "external" && isExternal)) {
              node.properties.target = "_blank"
              node.properties.rel = "noopener noreferrer"
            }
          })
        },
      ]
    },
  }
}

export default LinkTweaks
