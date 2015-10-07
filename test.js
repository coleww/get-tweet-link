var tap = require('tap')

var getTweetLink = require('./')

tap.test('does the thing', function (t) {
  var tweet = {
    id_str: '12345',
    user: {
      screen_name: 'foo'
    }
  }
  t.plan(1)
  t.equal(getTweetLink(tweet), 'https://twitter.com/foo/status/12345', 'does it')
})
