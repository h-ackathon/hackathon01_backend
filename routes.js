var AuthComponent = component('Auth');
var LeagueComponent = component('League');
// var LatestNewsComponent = component('LatestNews');
// var TeamRankingsComponent = component('TeamRankings');

module.exports = function(router){
    AuthComponent(router);
    LeagueComponent(router);
    // LatestNewsComponent(router);
    // TeamRankingsComponent(router);
}
