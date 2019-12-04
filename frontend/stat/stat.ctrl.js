const {getPlayers} = require('../../helpers/query_helper_player');
const {getMatches} = require('../../helpers/query_helper_match');
const { checkTokenValidity } = require('../../helpers/api_helper');

exports.index = async function(req, res) {

    const p = await getPlayers(req.params.league);
    const m = await getMatches(req.params.league);

    console.log("p-",req.params.league,"\n2-",m);

    var dataHash = {
        isLoggedIn: req.cookies.token && req.cookies.token !== 'undefined' 
        && checkTokenValidity(req.cookies.token),
        players: p,
        matches: m
    };

    res.render('stats', dataHash);
};