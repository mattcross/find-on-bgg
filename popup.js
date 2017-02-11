chrome.runtime.onMessage.addListener(function(message) {
  bggApiSearch(message.gameName);
});

function bggSearch(gameName) {
  window.open("https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q="+ encodeURI(gameName)+"&B1=Go");
}

function bggApiSearch(gameName) {
  $.get( "https://www.boardgamegeek.com/xmlapi2/search?query=" + gameName + "&type=boardgame,boardgamexpansion", function(data) {
    var items = $(data).find("item");
    items.each(function(index, item) {
      var id = $(item).attr("id");
      var name = $(item).find("name").attr("value");
      var year = $(item).find("yearpublished").attr("value");

      $(".container").append("<div><a target='_blank' href='https://boardgamegeek.com/boardgame/"+ id +"'>" + name + " - (" + year + ")" + "</a></div>");
    });

    console.log(data);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "send_game_name" });
  });
});
