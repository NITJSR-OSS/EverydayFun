const quotes = require("./data/quotes.json");
const jokes = require("./data/jokes.json");
const riddles = require("./data/riddles.json");

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomQuote() {
  return getRandomItem(quotes);
};

function getRandomJoke() {
  return getRandomItem(jokes);
}

function getRandomRiddle() {
  return getRandomItem(riddles);
}

module.exports = {
  getRandomQuote,
  getRandomJoke,
  getRandomRiddle
};
