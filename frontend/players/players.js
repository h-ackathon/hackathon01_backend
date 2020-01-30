const { index, addPlayer } = require('./players.ctrl');

module.exports = (router) => {

    router.get('/addplayer', index);
    router.post('/addplayer', addPlayer);
  
};