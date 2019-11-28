const { index } = require('./home.ctrl');

module.exports = (router) => {

    router.get('/', index);
  
};