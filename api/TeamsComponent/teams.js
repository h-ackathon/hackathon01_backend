var controller = require('./teams.ctrl');

module.exports = (router) => {
  router.get('/testrankings', controller.getTestRankings);
  router.get('/allteams', controller.getAllTeams);
} 