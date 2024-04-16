/**
 * Evaluates an XPath expression on a supplied context node and returns the first matching node
 * @param {string} xpathExpression - the XPath expression to evaluate
 * @param {Node} contextNode - the context node for the evaluation (defaults to document)
 * @returns {Node|null} - the first node matching the XPath expression, or null if none found or on error
 */
export const queryXPath = (xpathExpression = '//*', contextNode = document) => {
  // Exit early if wrong types of objects supplied
  if (typeof xpathExpression !== 'string') {
    console.error(`queryXPath failed: Supplied XPath expression is not a string`)
    return null
  }

  if (contextNode instanceof Node !== true) {
    console.error(`queryXPath failed: Supplied context node is not a node`)
    return null
  }

  // Try to evaluate supplied string on supplied node
  try {
    return document.evaluate(
      xpathExpression,
      contextNode,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE
    ).singleNodeValue
  }

  // Return null if try fails
  catch (error) {
    console.error(`queryXPath failed: ${error}`)
    return null
  }
}

/**
 * Evaluates an XPath expression on a supplied context node and returns all matching nodes
 * @param {String} xpathExpression - the XPath expression to evaluate
 * @param {Node} contextNode - the context node for the evaluation (defaults to document)
 * @returns {Array} - an array of all nodes matching the XPath expression, or an empty array on error
 */
export const queryXPathAll = (xpathExpression = '//*', contextNode = document) => {
  // Exit early if wrong types of objects supplied
  if (typeof xpathExpression !== 'string') {
    console.error(`queryXPathAll failed: Supplied XPath expression is not a string`)
    return []
  }

  if (contextNode instanceof Node !== true) {
    console.error(`queryXPathAll failed: Supplied context node is not a node`)
    return []
  }

  let node
  const nodes = []

  // Try to evaluate supplied string on supplied node
  try {
    const xpath = document.evaluate(
      xpathExpression,
      contextNode,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE
    )

    while (node = xpath.iterateNext()) {
      nodes.push(node)
    }

    return nodes
  }

  // Return empty array if try fails
  catch (error) {
    console.error(`queryXPathAll failed: ${error}`)
    return []
  }
}
