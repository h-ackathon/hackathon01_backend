var AuthComponent = component('Auth');
var LatestNewsComponent = component('LatestNews');
var TeamsComponent = component('Teams');

module.exports = function(router){
    AuthComponent(router);
    LatestNewsComponent(router);
    TeamsComponent(router);
}
