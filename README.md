# queryxpath

*Simple `queryXPath()` and `queryXPathAll()` functions for JavaScript*

These functions add the ability to query the document for elements that match XPath selectors, and returns them in an array. They act as a simple layer of abstraction covering over the details of `document.evaluate()`, which is the platform native way to query XPath from JavaScript, and provide a simpler UI for developers working with XPaths in the browser.

## Usage

The simplest way to use these functions are to load the JavaScript file on a page where you want to use it:

```html
<script src=https://tomhodgins.github.io/queryxpath/queryxpath.js></script>
```

Then you should be able to make use of `queryXPath()` and `queryXPathAll()` right away. The `queryXPath()` function returns only one result, the first result from `queryXPathAll()`.

If for some reason you really want to mimic `document.querySelector()` and `document.querySelectorAll()` you can also add these functions to the `Document` prototype with the following lines:

```js
Document.prototype.queryXPath = queryXPath
Document.prototype.queryXPathAll = queryXPathAll
```

However, this could conflict with any future `queryXPath` or `queryXPathAll` implementations that might show up any time in the future.

## Example

Here's a simple usage example of both helper functions:

```html
<ul>
  <li>item
  <li class=target>item
  <li>item
</ul>

<script src=https://tomhodgins.github.io/queryxpath/queryxpath.js></script>

<script>
  // Selecting the <ul> as the parent of <li class=target>
  queryXPath('//li[@class="target"]/parent::*')
    .style.border = '4px dashed orange'
    
  // Selecting all <li> elements
  queryXPathAll('//li').forEach(tag => 
    tag.style.border = '4px dashed blue')
</script>
```

For a more detailed example of what you can do with XPath, check out the [XPath Selector Demo](http://tomhodgins.github.io/queryxpath/tests/xpath-selector-test.html) test page.