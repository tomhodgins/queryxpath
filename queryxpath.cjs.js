module.exports.queryXPath = path => document.evaluate(
  path,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
).snapshotItem(0)

module.exports.queryXPathAll = path => {

  const nodeArray = []
  const xpath = document.evaluate(
    path,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  )

  for (let i=0; i<xpath.snapshotLength; i++) {
    nodeArray.push(xpath.snapshotItem(i))
  }

  return nodeArray

}
