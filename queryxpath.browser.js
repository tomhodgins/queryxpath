const queryXPath = (string = '//*') => document.evaluate(
  string,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE
).singleNodeValue

const queryXPathAll = (string = '//*') => {
  let node
  const nodes = []
  const xpath = document.evaluate(
    string,
    document,
    null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE
  )

  while (node = xpath.iterateNext()) {
    nodes.push(node)
  }

  return nodes
}
