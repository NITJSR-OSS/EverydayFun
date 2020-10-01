const quotes = require("./data/quotes.json");
const jokes = require("./data/jokes.json");
const riddles = require("./data/riddles.json");

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function searchArray(items, element, criteria) {
  let list = [];

  if(typeof criteria === 'string') {
    items.forEach(function(item) {
      if(item[element] === criteria) {
        list.push(item); 
      }
    })
  } else if (typeof criteria === 'object') {
    criteria.forEach(function(cri) {
      items.forEach(function(item) {
        if(item[element] === cri) {
          list.push(item); 
        }
      })
    })
  }

  return list;
}

function getRandomQuote(author) {
  if(author) {
    return searchArray(quotes, 'author', author)
  } else {
    return getRandomItem(quotes);
  }
};

function getRandomJoke(category) {
  if(category) {
    return searchArray(jokes, 'category', category)
  } else {
    return getRandomItem(jokes);
  }
}

function getRandomRiddle() {
  return getRandomItem(riddles);
}

module.exports = {
  getRandomQuote,
  getRandomJoke,
  getRandomRiddle
};
