/* global exports */
"use strict";
// From https://github.com/joelgrus/polyglot-twitter-bot
// License: Public Domain, Author: Joel Grus

// module Twitter

var Twitter = require("twitter");

exports.twitterClient = function(credentials) {
  return function() {
    return new Twitter(credentials);
  };
};
