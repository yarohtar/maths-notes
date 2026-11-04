import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"

// "Fallback" pages (feedback / missing page) get a bare layout: no titles, graph, backlinks, etc.
const FALLBACK_SLUGS = new Set(["feedback", "no-page"])
const isFallback = (slug: string | undefined) => FALLBACK_SLUGS.has(slug ?? "")
registerCondition("not-fallback", (props) => !isFallback(props.fileData.slug))
registerCondition(
  "not-index-or-fallback",
  (props) => props.fileData.slug !== "index" && !isFallback(props.fileData.slug),
)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
