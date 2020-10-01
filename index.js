var data_quote = require("./data/quotes.json");
var data_joke = require("./data/jokes.json");
var data_riddle = require("./data/riddles.json");

var cur = {};

function randomNoGenerator(min, max) {
  if (typeof max !== "number" && typeof min !== "number") {
    min = 0;
    max = 1;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.getRandomQuote = function () {
  var ind = randomNoGenerator(0, data_quote.length);
  cur.quote = data_quote[ind].Quote;
  cur.author = data_quote[ind].Author;
  return cur;
};

module.exports.getRandomJoke = function () {
  var ind = randomNoGenerator(0, data_joke.length);
  cur.body = data_joke[ind].body;
  cur.category = data_joke[ind].category;
  return cur;
};

module.exports.getRandomRiddle = function () {
  var ind = randomNoGenerator(0, data_riddle.length);
  cur.riddle = data_riddle[ind].riddle;
  cur.answer = data_riddle[ind].answer;
  return cur;
};
