module.exports = function (tweet) {
  return 'https://twitter.com/' +  tweet.user.screen_name + "/status/" + tweet.id_str
}
