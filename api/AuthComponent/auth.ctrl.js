const { createAuthToken, failure401, failure404, failure500,
    encodeAndValidatePassword } = require('../../helpers/api_helper');
const { compareSync } = require('bcryptjs');
const { authLogin, authRegister } = require('../../helpers/query_helper_auth');

exports.login = async (req, res, next) => {
    try {
        let addedResponse = {};
        let response = await authLogin(req.body.email);
        if (response) {
            if (compareSync(req.body.password, response.password)) {
                addedResponse.user = response;
                addedResponse.token = createAuthToken(response._id);
                next(addedResponse);
            } else {
                failure401(res);
            };
        }
        else {
            failure404(res);
        };
    }
    catch (err) {
        failure500(res);
    };
};

exports.register = async (req, res, next) => {
    console.log("Register user", req.body);
    try {
        req.body.password = encodeAndValidatePassword(req.body.password);
        let addedResponse = {};
        let response = await authRegister(req.body);
        console.log("reg resp-->", response);
        if (response) {
            addedResponse.user = response;
            addedResponse.token = createAuthToken(response._id);
            console.log("added", addedResponse);
            next(addedResponse);
        } else {
            console.log("e")
            failure500(res, 'Error saving user');
        };
    }
    catch (err) {
        failure500(res, err);
    };

};