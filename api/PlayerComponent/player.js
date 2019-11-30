const { getPlayersByLeague } = require('./player.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {

    router.get('/leagueplayers', getPlayersByLeague, success);
    
};