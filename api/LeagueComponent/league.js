const { allLeagues, getLeagueTeams } = require('./league.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {

    router.get('/allLeagues', allLeagues, success);    
    router.get('/getleagueteams', getLeagueTeams, success);    
};