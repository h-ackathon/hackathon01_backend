const MatchModel = model('match');

exports.getMatches = async (league) => {
    try {
        return await MatchModel.find({ league: league });
    }
    catch (err) {
        console.log("Error getting matches", err);
        return false;
    };
};
exports.addMatch = async (match) => {
    try {
        return await MatchModel.create(match);
    }
    catch (err) {
        console.log("Error getting matches", err);
        return false;
    };
};
