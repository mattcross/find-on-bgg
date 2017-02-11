function locateGameNameElement() {
  return extractFirstMatchingElement(document.querySelectorAll('h1[itemprop="name"]'));
}