const { failure401, failure404, failure500, failure422 } = require('../../helpers/api_helper');
const { createUserTeam, getUserTeam, updateUserTeam } = require('../../helpers/user_team_helper');
const mongoose = require('mongoose');
var _ = require('lodash');

exports.postUserTeam = async (req, res, next) => {
  try {
    const players = _.get(req, "body.players"),
      name = _.get(req, "body.name");
    if (!players) {
      failure401(res, {});
    }
    if (!name) {
      failure401(res, { error: "Name is required" });
      return;
    }
    if (players.length < 11) {
      failure422(res, { error: "Invalid Data" });
      return;
    }
    const hasCaptain = _.find(players, { is_captain: true }),
      hasViceCaptain = _.find(players, { is_vice_captain: true });
    if (!hasCaptain && !hasViceCaptain) { failure422(res, { error: "Invalid Data" }); return; }

    const l = _.get(req, "params.leagueId"),
      // leagueId = mongoose.Types.ObjectId(l),
      leagueId = l,
      u = _.get(req, "params.userId"),
      userId = mongoose.Types.ObjectId(u);

    const userTeam = [];
    _.each(players, function (player, playerIndex) {
      userTeam.push({
        is_captain: player.is_captain,
        is_vice_captain: player.is_vice_captain,
        is_playing: player.is_playing,
        _id: mongoose.Types.ObjectId(player._id)
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


exports.getUserTeam = async (req, res, next) => {
  try {
    let response = await getUserTeam(req.query.leagueId, req.query.userId);
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
}

exports.updateUserTeam = async (req, res, next) => {
  try {
    const players = _.get(req, "body.players");
    if (!players) {
      failure401(res, {});
    }
    if (players.length < 11) {
      failure422(res, { error: "Invalid Data" });
      return;
    }
    const hasCaptain = _.find(players, { is_captain: true }),
      hasViceCaptain = _.find(players, { is_vice_captain: true });
    if (!hasCaptain && !hasViceCaptain) { failure422(res, { error: "Invalid Data" }); return; }

    const userTeamId = _.get(req, "body.userTeamId")
    const teamName = _.get(req, "body.name")

    const userTeam = [];
    _.each(players, function (player, playerIndex) {
      userTeam.push({
        is_captain: player.is_captain,
        is_vice_captain: player.is_vice_captain,
        is_playing: player.is_playing,
        _id: mongoose.Types.ObjectId(player._id)
      });
    });
    let response = await updateUserTeam(userTeamId, teamName, userTeam)
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
  }
}