const quotes = removeDuplicateQuotes(require("./data/quotes.json"));
const jokes = removeDuplicateJokes(require("./data/jokes.json"));
const riddles = removeDuplicateRiddles(require("./data/riddles.json"));

// This function removes all duplicate riddles
function removeDuplicateRiddles(inputArray) {
  outputArray = inputArray.filter(
    (arrayElement, index, self) =>
      index ===
      self.findIndex(
        (element) =>
          element.riddle === arrayElement.riddle &&
          element.answer === arrayElement.answer
      )
  );
  return outputArray;
}

// This function removes all duplicate Jokes
function removeDuplicateJokes(inputArray) {
  outputArray = inputArray.filter(
    (arrayElement, index, self) =>
      index ===
      self.findIndex(
        (element) =>
          element.body === arrayElement.body &&
          element.category === arrayElement.category
      )
  );
  return outputArray;
}
// This function removes all duplicate Quotes
function removeDuplicateQuotes(inputArray) {
  outputArray = inputArray.filter(
    (arrayElement, index, self) =>
      index ===
      self.findIndex(
        (element) =>
          element.quote === arrayElement.quote &&
          element.author === arrayElement.author
      )
  );
  return outputArray;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomQuote() {
  return getRandomItem(quotes);
}

function getRandomJoke() {
  return getRandomItem(jokes);
}

function getRandomRiddle() {
  return getRandomItem(riddles);
}

module.exports = {
  getRandomQuote,
  getRandomJoke,
  getRandomRiddle,
};
