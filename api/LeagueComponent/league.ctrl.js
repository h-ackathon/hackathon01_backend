const { failure401, failure404, failure500, encodeAndValidatePassword } = require('../../helpers/api_helper');
const { getAllLeagues } = require('../../helpers/league_helper');

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
