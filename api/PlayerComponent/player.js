const { getPlayersByLeague, getPlayersByMatch, addPlayer } = require('./player.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {
    router.get('/leagueplayers', getPlayersByLeague, success);
    router.get('/playersbymatch', getPlayersByMatch, success);
    router.post('/addplayer', addPlayer, success);
};