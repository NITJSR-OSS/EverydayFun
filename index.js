const quotes = require("./data/quotes.json");
const jokes = require("./data/jokes.json");
const riddles = require("./data/riddles.json");

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomQuote(author) {
  if(author) {
    list = [];
    if(typeof author === 'string') {
      quotes.forEach(function(item) {
        if(item.Author === author) {
          list.push(item);
        }
      })
    } else if (typeof author === 'object') {
      author.forEach(function(auth) {
        quotes.forEach(function(item) {
          if(item.Author === auth) {
            list.push(item);
          }
        })
      })
    }

    return list;
  } else {
    return getRandomItem(quotes);
  }
};

function getRandomJoke(category) {
  if(category) {
    list = [];
    if(typeof category === 'string') {
      jokes.forEach(function(item) {
        if(item.category === category) {
          list.push(item);
        }
      })
    } else if (typeof category === 'object') {
      category.forEach(function(cat) {
        jokes.forEach(function(item) {
          if(item.category === cat) {
            list.push(item);
          }
        })
      })
    }

    return list;
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
