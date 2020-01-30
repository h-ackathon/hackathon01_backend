const { failure401, failure404, failure500, encodeAndValidatePassword } = require('../../helpers/api_helper');
const { getAllLeagues } = require('../../helpers/league_helper');
const { getLeagueTeams } = require('../../helpers/query_helper_team');

exports.allLeagues = async (req, res, next) => {
    try {
        let addedResponse = {};
        let response = await getAllLeagues();
        if (response) {
            next(response);
        }
        else {
            failure404(res, {});
        };
    }
    catch (err) {
        failure500(res, err);
    };
};
exports.getLeagueTeams = async (req, res, next) => {
    try {
        let response = await getLeagueTeams(req.query.leagueId);
        if (response) {
            next(response);
        }
        else {
            failure404(res, {});
        };
    }
    catch (err) {
        failure500(res, err);
    };
};
