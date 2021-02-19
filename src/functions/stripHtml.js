function simpleStripHTML(htmlString) {
  return htmlString.replace(/<[^>]*>?/gm, '')
}