var AuthComponent = component('Auth');
var LatestNewsComponent = component('LatestNews');
var TeamsComponent = component('Teams');
var MatchComponent = component('Match');
var LeagueComponent = component('League');
var UserTeamComponent = component('UserTeam');
var PlayerComponent = component('Player');
var StatComponent = component('Stat');
// var LatestNewsComponent = component('LatestNews');
// var TeamRankingsComponent = component('TeamRankings');

module.exports = function(router){
    AuthComponent(router);
    LatestNewsComponent(router);
    TeamsComponent(router);
    MatchComponent(router);
    LeagueComponent(router);
    UserTeamComponent(router);
    PlayerComponent(router);
    StatComponent(router);
    // LatestNewsComponent(router);
    // TeamRankingsComponent(router);
}
