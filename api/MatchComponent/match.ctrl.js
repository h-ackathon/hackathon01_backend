const {getMatches} = require('../../helpers/query_helper_match');

exports.getMatchesByLeague = async (req, res, next) => {
    try {
        const response = await getMatches(req.query.league);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};