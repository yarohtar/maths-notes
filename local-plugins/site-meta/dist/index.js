// Search-engine metadata for the site.
//
// 1. Writes /robots.txt with a Sitemap: line. (Cloudflare's managed robots.txt
//    rules get added on top of this file at the edge.)
// 2. Pages in `noindexSlugs` get <meta name="robots" content="noindex"> and are
//    marked unlisted, so content-index leaves them out of sitemap.xml, the RSS
//    feed and the search index. They stay reachable by direct URL.
//
// Unlisting happens here (an emitter) rather than in a transformer so that it
// also covers virtual pages such as tags/index, which never pass through
// transformers. Quartz starts emitters in `order`, and content-index reads
// file.data synchronously, so this plugin must have a lower order (it has 1)
// and must mark pages before its first `await`.
import path from "node:path"
import fs from "node:fs/promises"
import { h } from "preact"

export const SiteMeta = (opts) => {
  const slugs = new Set(opts?.noindexSlugs ?? ["feedback", "no-page", "tags/index"])
  return {
    name: "SiteMeta",
    externalResources() {
      return {
        additionalHead: [
          (fileData) =>
            slugs.has(fileData?.slug) ? h("meta", { name: "robots", content: "noindex" }) : null,
        ],
      }
    },
    async emit(ctx, content) {
      // must stay synchronous (see header comment)
      for (const [, file] of content) {
        if (file?.data && slugs.has(file.data.slug)) file.data.unlisted = true
      }

      const baseUrl = ctx.cfg.configuration.baseUrl
      const lines = ["User-agent: *", "Allow: /"]
      if (baseUrl) lines.push("", `Sitemap: https://${baseUrl.replace(/\/+$/, "")}/sitemap.xml`)
      const out = path.join(ctx.argv.output, "robots.txt")
      await fs.mkdir(path.dirname(out), { recursive: true })
      await fs.writeFile(out, lines.join("\n") + "\n")
      return [out]
    },
    async *partialEmit() {},
  }
}

export default SiteMeta
