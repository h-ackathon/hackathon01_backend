var controller = require('./teams.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {
  router.get('/testrankings', controller.getTestRankings);
  router.get('/allteams', controller.getAllTeams);
  router.post('/addteam', controller.addTeam, success);
} 