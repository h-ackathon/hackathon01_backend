const {getPlayers} = require('../../helpers/query_helper_player');

exports.getPlayersByLeague = async (req, res, next) => {
    try {
        const response = await getPlayers(req.query.league);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};