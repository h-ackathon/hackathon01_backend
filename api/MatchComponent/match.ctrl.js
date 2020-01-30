const {getMatches, addMatch} = require('../../helpers/query_helper_match');

exports.getMatchesByLeague = async (req, res, next) => {
    try {
        const response = await getMatches(req.query.league);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};
exports.addMatch = async (req, res, next) => {
    try {
        const response = await addMatch(req.body.match);
        next(response);
    }
    catch (err) {
        failure500(res, err);
    };
};