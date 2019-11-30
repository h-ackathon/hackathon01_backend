const { postUserTeam } = require('./userTeam.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {
    
    router.post('/create-user-team/:leagueId/:userId', postUserTeam, success);
};