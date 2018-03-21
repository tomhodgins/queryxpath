function queryXPathAll(path) {

  var nodeArray = []

  var xpath = document.evaluate(path, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)

  for (var i=0; i<xpath.snapshotLength; i++) nodeArray.push(xpath.snapshotItem(i))

  return nodeArray

}

function queryXPath(path) { return queryXPathAll(path)[0] }
