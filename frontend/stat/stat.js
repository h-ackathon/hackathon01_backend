const {index} = require('./stat.ctrl');

module.exports = (router) => {
    router.get('/stats/:league', index);
}