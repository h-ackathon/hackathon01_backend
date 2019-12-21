const UserTeamModel = model('userteam');
const mongoose = require('mongoose')

exports.createUserTeam = async (param) => {
  try {
    return UserTeamModel.create(param);
  }
  catch (err) {
    console.log("Error logging in user", err);
    return false;
  };
};
exports.getUserTeam = async (leagueId, userId) => {
  try {
    return UserTeamModel.aggregate([
      {
        $match: {
          league: leagueId,
          user: mongoose.Types.ObjectId(userId)
        }
      },
      {
        $lookup: {
          from: "players",
          localField: "players._id",
          foreignField: "_id",
          as: "newplayer"
        }
      },
      {
        $lookup: {
          from: "teams",
          localField: "league",
          foreignField: "league",
          as: "leagueteams"
        }
      }
    ]);
  }
  catch (err) {
    console.log("Error logging in user", err);
    return false;
  };
};
exports.updateUserTeam = async (userTeamId, teamName, userTeam) => {
  try {
    return UserTeamModel.update(
      {
        _id: mongoose.Types.ObjectId(userTeamId)
      },
      {
        $set: {
          players: userTeam,
          name: teamName
        }
      }
    ).exec();
  }
  catch (err) {
    console.log("Error logging in user", err);
    return false;
  };
};
