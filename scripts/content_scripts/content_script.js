function sanitizeGameName(gameName) {
  var replacementTerms = ["(New Arrival)", "Expansion", "Board Game"];

  replacementTerms.forEach(function(replacementTerm) {
    gameName = gameName.replace(replacementTerm, "");
  });

  return gameName;
}

function extractFirstMatchingElement(elements) {
  if(elements != null && elements[0] != null) {
  	return elements[0].innerText;
  }
}

function sendGameName() {
  var gameNameElement = locateGameNameElement();
  var gameName = sanitizeGameName(gameNameElement);

  chrome.runtime.sendMessage({ gameName: gameName });
}

chrome.runtime.onMessage.addListener(function(message) {
  sendGameName();
});