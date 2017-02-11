function locateGameNameElement() {
  return extractFirstMatchingElement(document.querySelectorAll('h1.product-name'));
}