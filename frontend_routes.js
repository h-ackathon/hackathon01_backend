const Home = require('./frontend/home/home');
const Auth = require('./frontend/auth/auth');

module.exports = (router) => {
    Home(router);
    Auth(router);
};