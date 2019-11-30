const { failure401, failure404, failure500, failure422 } = require('../../helpers/api_helper');
const { createUserTeam } = require('../../helpers/user_team_helper');
const mongoose = require('mongoose');
var _ = require('lodash');

exports.postUserTeam= async (req, res, next) => {
    try {
        const players = _.get(req, "body.players"),
        name = _.get(req, "body.name");
        if (!players) {
            failure401(res, {});
        }
        if (!name) {
            failure401(res, {error: "Name is required"});
            return;
        }
        if (players.length < 11) {
            failure422(res, {error: "Invalid Data"});
            return;
        }
        const hasCaptain = _.find(players, { isCaptain: true }),
        hasViceCaptain = _.find(players, { isViceCaptain: true });
        if (!hasCaptain && !hasViceCaptain) { failure422(res, {error: "Invalid Data" }); return; }
        
        const l = _.get(req, "params.leagueId"),
        leagueId = mongoose.Types.ObjectId(l),
        u = _.get(req, "params.userId"),
        userId = mongoose.Types.ObjectId(u);

        const userTeam = [];
        _.each(players, function(player, playerIndex) {
            userTeam.push({
                isCaptain: player.isCaptain, 
                isViceCaptain: player.isViceCaptain, 
                id: mongoose.Types.ObjectId(player.id) 
            });
        });
        const params = { league: leagueId, user: userId, players: userTeam, name: name }
        let response = await createUserTeam(params);
        if (response) {
            next(response);
        }
        else {
            failure404(res, {});
        };
    }
    catch (err) {
        console.log(err);
        failure500(res, err);
    };
};
