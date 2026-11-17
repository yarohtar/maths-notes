// Regenerates quartz/static/og-image.png (link preview image). Run: node scripts/make-og-image.cjs
const repo = require("path").join(__dirname, "..") + "/"
const req = require("module").createRequire(repo + "package.json")
const { mathjax } = req("mathjax-full/js/mathjax.js")
const { TeX } = req("mathjax-full/js/input/tex.js")
req("mathjax-full/js/input/tex/ams/AmsConfiguration.js")
const { SVG } = req("mathjax-full/js/output/svg.js")
const { liteAdaptor } = req("mathjax-full/js/adaptors/liteAdaptor.js")
const { RegisterHTMLHandler } = req("mathjax-full/js/handlers/html.js")
const sharp = req("sharp")
const adaptor = liteAdaptor(); RegisterHTMLHandler(adaptor)
const doc = mathjax.document("", { InputJax: new TeX({ packages: ["base","ams"] }), OutputJax: new SVG({ fontCache: "none" }) })
const tex = String.raw`\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}`
let eq = adaptor.innerHTML(doc.convert(tex, { display: true }))
// size: mathjax gives width/height in ex; scale to ~900px wide
const W = 1200, H = 630, bg = "#161618", fg = "#ebebec", accent = "#7b97aa", muted = "#a0a0a8"
const vb = eq.match(/viewBox="([^"]+)"/)[1].split(" ").map(Number)
const eqW = 860, eqH = eqW * vb[3] / vb[2]
eq = eq.replace(/width="[^"]+"/, `width="${eqW}"`).replace(/height="[^"]+"/, `height="${eqH}"`)
       .replace(/style="[^"]*"/, "").replace(/currentColor/g, fg)
const eqY = 250
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <rect x="0" y="0" width="${W}" height="8" fill="${accent}"/>
  <text x="80" y="130" font-family="DejaVu Sans, sans-serif" font-weight="bold" font-size="64" fill="${accent}">MathsNotes</text>
  <g transform="translate(${(W - eqW) / 2}, ${eqY})">${eq}</g>
  <text x="80" y="560" font-family="DejaVu Sans, sans-serif" font-size="30" fill="${muted}">Notes on Cambridge Maths · maths.iammerlin.fyi</text>
</svg>`
sharp(Buffer.from(svg)).png().toFile(repo + "quartz/static/og-image.png").then(i => console.log(i))
