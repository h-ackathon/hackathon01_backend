const { getMatchesByLeague, addMatch } = require('./match.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {

    router.get('/leaguematches', getMatchesByLeague, success);
    router.post('/addmatch', addMatch, success);
    
};