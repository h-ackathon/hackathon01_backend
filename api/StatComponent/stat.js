const { saveStat } = require('./stat.ctrl');
const { success } = require('../../helpers/api_helper');

module.exports = (router) => {

    router.post('/savestat', saveStat, success);
    
};