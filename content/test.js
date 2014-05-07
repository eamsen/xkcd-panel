"use strict";

let TEST_FEEDS = [
  "http://vimeo.com/channels/staffpicks/videos/rss"
];

// Appends the first raw entry data from the feed to the DOM
function appendRawEntry(feed) {
  let h1 = document.createElement("h1");
  h1.textContent = "Raw entry for " + feed.title.plainText();
  h1.style.backgroundColor = "#ddd";

  let div = document.createElement("div");
  let entry = feed.items.queryElementAt(0, Ci.nsIFeedEntry);
  div.textContent = JSON.stringify(entry);
  div.style.backgroundColor = "#ddd";

  document.body.appendChild(h1);
  document.body.appendChild(div);
}

// Appends the raw feed data to the DOM
function appendRawFeed(feed) {
  let div = document.createElement("div");
  div.textContent = JSON.stringify(feed);
  document.body.appendChild(div);
}

TEST_FEEDS.forEach(function(url) {
  FeedHelper.parseFeed(url, function(parsedFeed) {
    let h1 = document.createElement("h1");
    h1.textContent = parsedFeed.title.plainText();

    // Only return the first 3 items
    let items = FeedHelper.feedToItems(feed).slice(0, 3);

    let div = document.createElement("div");
    div.textContent = JSON.stringify(items);

    document.body.appendChild(h1);
    document.body.appendChild(div);

    appendRawEntry(feed);
  });
});
