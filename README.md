get-tweet-link
----------------

Given a tweet object, return a direct link to that tweet, because for some reason the twitter api seems to not do that. weird.

[![NPM](https://nodei.co/npm/get-tweet-link.png)](https://nodei.co/npm/get-tweet-link/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/get-tweet-link.png)](http://travis-ci.org/coleww/get-tweet-link)

### EXAMPLE

var getLink = require('get-tweet-link')
getLink(tweet)
// wow!

This module was designed for use with [ttezel/twit](https://github.com/ttezel/twit) but will accept any object that satisfies [this interface](https://github.com/coleww/get-tweet-link/blob/master/test.js#L6-L11)
