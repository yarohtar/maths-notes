// MathJax with CHTML (HTML+CSS) output, as used in the Quartz 4 version of this site.
// remark-math and rehype-mathjax are dependencies of the Quartz root package.json.
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax/chtml"

const FONT_URL = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"

export const MathjaxChtml = (opts) => {
  const macros = opts?.customMacros ?? {}
  const mathJaxOptions = opts?.mathJaxOptions ?? {}
  return {
    name: "MathjaxChtml",
    markdownPlugins() {
      return [remarkMath]
    },
    htmlPlugins() {
      return [
        [
          rehypeMathjax,
          {
            ...mathJaxOptions,
            tex: { ...(mathJaxOptions.tex ?? {}), macros },
            chtml: { fontURL: FONT_URL, ...(mathJaxOptions.chtml ?? {}) },
          },
        ],
        // (Quartz 5 already renders <style> contents unescaped, so the v4 workaround isn't needed)
      ]
    },
  }
}

export default MathjaxChtml
