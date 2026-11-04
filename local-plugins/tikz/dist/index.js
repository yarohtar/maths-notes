// Turns ```tikz fenced code blocks into <script type="text/tikz"> tags that
// TikZJax renders in the browser. TikZJax is self-hosted in quartz/static/tikzjax/
// (built by https://github.com/bill-ion/tikzjax-live).
// Hand-written ESM (no build step); unist-util-visit is provided by Quartz.
import { visit } from "unist-util-visit"

const css = `
.tikzimage {
  margin: auto;
  & svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10em;
    height: auto;
    > g > g > g {
      fill: var(--dark);
      stroke: var(--dark);
    }
  }
}
`

export const Tikz = () => ({
  name: "Tikz",
  markdownPlugins() {
    return [
      () => (tree) => {
        visit(tree, "code", (node) => {
          if (node.lang === "tikz") {
            node.type = "html"
            node.value =
              "<div class='tikzimage'><script type='text/tikz' data-show-console='true'>" +
              node.value +
              "</script></div>"
          }
        })
      },
    ]
  },
  externalResources() {
    return {
      css: [
        { content: "/static/tikzjax/fonts.css" },
        { content: css, inline: true },
      ],
      js: [
        {
          src: "/static/tikzjax/tikzjax.js",
          loadTime: "beforeDOMReady",
          contentType: "external",
        },
      ],
    }
  },
})

export default Tikz
