const StatModel = model('stat');
const { failure401, failure404, failure500, failure422 } = require('../../helpers/api_helper');
const mongoose = require('mongoose');

exports.saveStat = async (req, res, next) => {
    try {
        let {league, match, player} = req.body;
        if (!league || !match || !player) failure422(res, {error: "Invalid Data" });
        league = mongoose.Types.ObjectId(league);
        match = mongoose.Types.ObjectId(match);
        player = mongoose.Types.ObjectId(player);
        const response = await StatModel.create(req.body);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};