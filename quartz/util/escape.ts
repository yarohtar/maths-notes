export const escapeHTML = (unsafe: string) => {
  let res = unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
  if (res.includes("text/tikz"))
  {
    console.log(res);
  }
  return res;
}

export const unescapeHTML = (html: string) => {
  return html
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
}
