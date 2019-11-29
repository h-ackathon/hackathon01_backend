var AuthComponent = component('Auth');
var LatestNewsComponent = component('LatestNews');
var TeamRankingsComponent = component('TeamRankings');

module.exports = function(router){
    AuthComponent(router);
    LatestNewsComponent(router);
    TeamRankingsComponent(router);
}
