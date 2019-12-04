const Home = require('./frontend/home/home');
const Auth = require('./frontend/auth/auth');
const Stat = require('./frontend/stat/stat');

module.exports = (router) => {
    Home(router);
    Auth(router);
    Stat(router);
};