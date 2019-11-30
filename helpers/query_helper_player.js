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
            // {
            //     $addFields: {
            //         teamName: 'team'
            //     }
            // },
            // {
            //     $project: {
            //         player: 1,
            //         _id: 0,
            //         teamName: 1
            //     }
            // },
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