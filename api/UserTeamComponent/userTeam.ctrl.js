const { failure401, failure404, failure500 } = require('../../helpers/api_helper');
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

        const l = _.get(req, "params.leagueId"),
        leagueId = mongoose.Types.ObjectId(l),
        u = _.get(req, "params.userId"),
        userId = mongoose.Types.ObjectId(u);

        const userTeam = [];
        _.each(players, function(player, playerIndex) {
            userTeam.push(mongoose.Types.ObjectId(player));
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
