var AuthComponent = component('Auth');
var LatestNewsComponent = component('LatestNews');
var TeamsComponent = component('Teams');
var MatchComponent = component('Match');
var LeagueComponent = component('League');

module.exports = function(router){
    AuthComponent(router);
    LatestNewsComponent(router);
    TeamsComponent(router);
    MatchComponent(router);
    LeagueComponent(router);
}
