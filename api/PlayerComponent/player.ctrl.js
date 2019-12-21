const {getPlayers, getPlayersByMatch, addPlayer} = require('../../helpers/query_helper_player');

exports.getPlayersByLeague = async (req, res, next) => {
    try {
        const response = await getPlayers(req.query.league);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};

exports.getPlayersByMatch = async (req, res, next) => {
    try {
        const response = await getPlayersByMatch([req.query.team]);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};
exports.addPlayer = async (req, res, next) => {
    try {
        const response = await addPlayer(req.body.player);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};