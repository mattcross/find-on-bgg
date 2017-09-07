function locateGameNameElement() {
  return extractFirstMatchingElement(document.querySelectorAll('h3.product_title'));
}