const Home = require('./frontend/home/home');
const Auth = require('./frontend/auth/auth');
const Stat = require('./frontend/stat/stat');
const Players = require('./frontend/players/players');

module.exports = (router) => {
    Home(router);
    Auth(router);
    Stat(router);
    Players(router);
};