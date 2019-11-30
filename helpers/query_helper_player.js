const PlayerModel = require('../models/player');
const TeamModel = require('../models/team');

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
                $project: {
                    player: 1,
                    _id: 0
                }
            },
            {
                $unwind: '$player'
            }
        ]);
    }
    catch (err) {
        console.log("Error getting matches", err);
        return false;
    };
};