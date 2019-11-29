const MatchModel = require('../models/match');

exports.getMatches = async (league) => {
    try {
        return await MatchModel.find({ league: league });
    }
    catch (err) {
        console.log("Error getting matches", err);
        return false;
    };
};