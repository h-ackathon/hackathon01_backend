const StatModel = model('stat');
const { failure401, failure404, failure500, failure422 } = require('../../helpers/api_helper');
const mongoose = require('mongoose');

exports.saveStat = async ({body}, res, next) => {
    try {
        if (!body.league || !body.match || !body.player) {
            failure422(res, {error: "Invalid Data" });
            return;
        }
        next(await StatModel.create({...body, 
            match: mongoose.Types.ObjectId(body.match), 
            player: mongoose.Types.ObjectId(body.player)}));
    }
    catch (err) {
        failure500(res, err);
    }
};
exports.getPlayerStats = async function ({params}, res, next) {
    try {
        if (!params.league || !params.player) {
            failure422(res, {error: "Invalid Data"});
            return;
        }
        next(
            await StatModel.aggregate([
                {
                    $match: {
                        league: params.league,
                        player: params.player
                    }
                }
            ])
        );
    } catch (err) {
        failure500(res, err);
    }
};