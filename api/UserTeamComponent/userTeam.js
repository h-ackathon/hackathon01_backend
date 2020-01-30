const { postUserTeam, getUserTeam, updateUserTeam } = require('./userTeam.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {
    
    router.post('/create-user-team/:leagueId/:userId', postUserTeam, success);
    router.get('/getuserteam', getUserTeam, success);
    router.post('/updateuserteam', updateUserTeam, success);
};