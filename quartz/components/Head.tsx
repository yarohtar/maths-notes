import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../../.quartz/plugins"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"

// Versioned icon URLs: Cloudflare and browsers cache icons for hours, so a changed
// file in quartz/static must get a new URL to show up.
const versioned = (file: string) => {
  try {
    const hash = createHash("sha256").update(readFileSync(`quartz/static/${file}`))
    return `static/${file}?v=${hash.digest("hex").slice(0, 8)}`
  } catch {
    return `static/${file}`
  }
}
// icon.svg: TeX lambda that follows light/dark mode (most browsers).
// icon.png: same glyph in one mid-tone colour; the favicon plugin turns it into the
//   48px /favicon.ico used where SVG icons aren't (Safari).
// apple-touch-icon.png: on the page background, since iOS fills transparency with black.
const icons = {
  svg: versioned("icon.svg"),
  ico: `favicon.ico${versioned("icon.png").replace(/^[^?]*/, "")}`,
  touch: versioned("apple-touch-icon.png"),
}
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    // The home page title already names the site, so it gets no suffix
    const titleSuffix = fileData.slug === "index" ? "" : (cfg.pageTitleSuffix ?? "")
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      (fileData.description?.trim()
        ? unescapeHTML(fileData.description.trim())
        : // folder and tag pages have no text of their own; don't ship "No description provided"
          `${fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title}: notes from my Cambridge Maths degree.`)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, icons.ico)

    // Url of current page
    // (the home page lives at "/", not "/index"; folder pages at "folder/", not "folder/index")
    const socialUrl =
      fileData.slug === "404"
        ? url.toString()
        : joinSegments(url.toString(), fileData.slug!.replace(/(^|\/)index$/, "$1"))

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath)?.replace(/^\./, "") ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        {cfg.baseUrl && fileData.slug !== "404" && <link rel="canonical" href={socialUrl} />}
        <link rel="icon" href={iconPath} sizes="48x48" />
        <link rel="icon" href={joinSegments(baseDir, icons.svg)} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={joinSegments(baseDir, icons.touch)} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
