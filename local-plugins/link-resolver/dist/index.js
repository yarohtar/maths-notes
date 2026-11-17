// Fixes two cases where crawl-links' "shortest" resolution leaves a wikilink broken
// although Obsidian resolves it:
//
//  1. Folder notes: `Algebra/Group Theory/Group Theory.md` is published as the folder
//     page `algebra/group-theory/index`, so `[[Group Theory]]` never matches by file name.
//  2. Duplicate note names: `[[Ring]]` with both `Analysis/Measure/Ring.md` and
//     `Algebra/Ring Theory/Ring.md`. Obsidian picks the note closest to the linking
//     note; Quartz gives up.
//
// For a single-segment link target (no "/"), we collect candidates (notes with that
// file name, plus folder notes with that folder name). If crawl-links would already
// resolve it (exactly one note with that name) we do nothing. Otherwise we pick the
// candidate sharing the most leading folders with the linking note and rewrite the
// link to that note's full slug, which crawl-links resolves exactly. Ties stay broken.
//
// Runs at order 55, i.e. after obsidian-flavored-markdown (30) and before crawl-links (60).
import { visit } from "unist-util-visit"

const slugSegment = (s) =>
  s
    .replace(/\s/g, "-")
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent")
    .replace(/\?/g, "")
    .replace(/#/g, "")
    .replace(/[<>:"|*]/g, "")
    .toLowerCase()

const isLinkTarget = (href) =>
  typeof href === "string" &&
  href !== "" &&
  !href.startsWith("#") &&
  !href.startsWith("/") &&
  !href.startsWith(".") &&
  !/^[a-z][a-z0-9+.-]*:/i.test(href)

const commonPrefix = (a, b) => {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  return i
}

function buildIndex(ctx) {
  const slugs = new Set(ctx.allSlugs)
  const byName = new Map() // last segment -> [slug]
  const add = (name, slug) => {
    if (!byName.has(name)) byName.set(name, { notes: [], folderNotes: [] })
    return byName.get(name)
  }
  for (const slug of ctx.allSlugs) {
    const parts = slug.split("/")
    const name = parts[parts.length - 1]
    if (name !== "index") add(name).notes.push(slug)
  }
  for (const fp of ctx.allFiles) {
    const m = fp.match(/(?:^|\/)([^/]+)\/\1\.md$/)
    if (!m) continue
    const dir = fp.slice(0, -(m[1].length + ".md".length + 1))
    const slug = dir.split("/").map(slugSegment).join("/") + "/index"
    if (slugs.has(slug)) add(slugSegment(m[1])).folderNotes.push(slug)
  }
  return byName
}

function resolve(byName, sourceSlug, target) {
  const entry = byName.get(target)
  if (!entry) return null
  if (entry.notes.length === 1) return null // crawl-links handles this
  const candidates = [...entry.notes, ...entry.folderNotes]
  if (candidates.length === 0) return null
  if (candidates.length === 1) return candidates[0]
  const srcDir = sourceSlug.split("/").slice(0, -1)
  let best = null
  let bestScore = -1
  let tie = false
  for (const c of candidates) {
    const cDir = c.split("/").slice(0, -1)
    const score = commonPrefix(srcDir, cDir)
    if (score > bestScore) {
      best = c
      bestScore = score
      tie = false
    } else if (score === bestScore) {
      tie = true
    }
  }
  return tie ? null : best
}

function rewrite(byName, sourceSlug, href) {
  if (!isLinkTarget(href)) return null
  const hashAt = href.indexOf("#")
  const pathPart = hashAt === -1 ? href : href.slice(0, hashAt)
  const anchor = hashAt === -1 ? "" : href.slice(hashAt)
  let decoded = pathPart
  try {
    decoded = decodeURIComponent(pathPart)
  } catch {}
  decoded = decoded.replace(/\.md$/, "")
  if (decoded === "" || decoded.includes("/")) return null
  const slug = resolve(byName, sourceSlug, slugSegment(decoded))
  return slug ? slug + anchor : null
}

export const LinkResolver = () => ({
  name: "LinkResolver",
  htmlPlugins(ctx) {
    let byName = null
    return [
      () => (tree, file) => {
        byName ??= buildIndex(ctx)
        const source = file.data?.slug ?? ""
        visit(tree, "element", (node) => {
          if (node.tagName === "a") {
            const next = rewrite(byName, source, node.properties?.href)
            if (next) node.properties.href = next
          } else if (node.tagName === "blockquote" && node.properties?.dataUrl) {
            // transclusions: ![[Group Theory]]
            const next = rewrite(byName, source, node.properties.dataUrl)
            if (next) node.properties.dataUrl = next
          }
        })
      },
    ]
  },
})

export default LinkResolver
