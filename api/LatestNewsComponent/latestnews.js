const { getLatestNews } = require('./latestnews.ctrl');

module.exports = router => {
  router.get('/latestnews', getLatestNews);
}