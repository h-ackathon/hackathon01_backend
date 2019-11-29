var AuthComponent = component('Auth');
var MatchComponent = component('Match');
// var LatestNewsComponent = component('LatestNews');
// var TeamRankingsComponent = component('TeamRankings');

module.exports = function(router){
    AuthComponent(router);
    MatchComponent(router);
    // LatestNewsComponent(router);
    // TeamRankingsComponent(router);
}
