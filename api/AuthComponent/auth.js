var controller = require('./auth.ctrl.js')
module.exports = function (router) {
    router.get('/', controller.blankFunction);
    router.get('/teams', controller.teamRankings);
}

