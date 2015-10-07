var tap = require('tap')

var getTweetLink = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(getTweetLink('world'), 'hello world', 'does it')
})
