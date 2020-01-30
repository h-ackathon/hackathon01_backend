const { index } = require('./home.ctrl');

module.exports = (router) => {

    router.get('/', index);
    router.get('/matches/:type', index);
  
};