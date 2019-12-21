const PlayerModel = model('player');
const TeamModel = model('team');

exports.getPlayers = async (league) => {

  try {
    return await TeamModel.aggregate([
      {
        $match: {
          league: league
        }
      },
      {
        $lookup: {
          from: 'players',
          localField: 'key',
          foreignField: 'teams',
          as: 'player'
        }
      },
      {
        $unwind: '$player',
      },
      {
        $unwind: '$name',
      },
      {
        $project: {
          player: 1,
          _id: 0,
          name: 1
        }
      },
    ]);
  }
  catch (err) {
    console.log("Error getting matches", err);
    return false;
  };
};

exports.getPlayersByMatch = async (team) => {
  try {
    return await PlayerModel.find({ teams: { $in: team } }).sort('name');
  }
  catch (err) {
    console.log("Error getting matches", err);
    return false;
  };
};

exports.addPlayer = async (player) => {
  try {
    return await PlayerModel.create(player);
  }
  catch (err) {
    console.log("Error getting matches", err);
    return false;
  };
};