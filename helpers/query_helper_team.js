const TeamModel = model('team');

exports.getLeagueTeams = async (league) => {
  try {
    return await TeamModel.aggregate([
      {
        $match: {
          league: league
        }
      },
    ]);
  }
  catch (err) {
    console.log("Error getting matches", err);
    return false;
  };
};

exports.addTeam = async (team) => {
  try {
    return await TeamModel.create(team);
  }
  catch (err) {
    console.log("Error getting matches", err);
    return false;
  };
};
