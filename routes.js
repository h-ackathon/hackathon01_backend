var AuthComponent = component('Auth');
var MatchComponent = component('Match');
var LeagueComponent = component('League');
var UserTeamComponent = component('UserTeam');
var PlayerComponent = component('Player');
// var LatestNewsComponent = component('LatestNews');
// var TeamRankingsComponent = component('TeamRankings');

module.exports = function(router){
    AuthComponent(router);
    MatchComponent(router);
    LeagueComponent(router);
    UserTeamComponent(router);
    PlayerComponent(router);
    // LatestNewsComponent(router);
    // TeamRankingsComponent(router);
}
