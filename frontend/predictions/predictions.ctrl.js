const { dateFormat, checkEquality, getFirstCharIfNoImage, getMatchTitle, getMatchTitleWithDashes } = require('../../helpers/app_helper');
const { checkTokenValidity } = require('../../helpers/api_helper');
const {getAllLeagues} = require('../../helpers/league_helper');
const t20 = require('../../matches_data/t20i');
const odi = require('../../matches_data/odi');
const test = require('../../matches_data/test');

exports.matchT20 = function (req, res) {
    requestHandler(req, res, 't20', 'match');
};
exports.overT20 = function (req, res) {
    requestHandler(req, res, 't20', 'over');
};
exports.ballT20 = function (req, res) {
    requestHandler(req, res, 't20', 'ball');
};
exports.matchOdi = function (req, res) {
    requestHandler(req, res, 'odi', 'match');
};
exports.overOdi = function (req, res) {
    requestHandler(req, res, 'odi', 'over');
};
exports.ballOdi = function (req, res) {
    requestHandler(req, res, 'odi', 'ball');
};
exports.matchTest = function (req, res) {
    requestHandler(req, res, 'test', 'match');
};
exports.overTest = function (req, res) {
    requestHandler(req, res, 'test', 'over');
};
exports.ballTest = function (req, res) {
    requestHandler(req, res, 'test', 'ball');
};

function requestHandler (req, res, matchType, predictionType) {

    // const d = await getAllLeagues();

    console.log("params", req.params.type)
    
    let d = [];
    switch (req.params.type) {
        case 't20':
            d = t20;
            break;
        case 'odi':
            d = odi;
            break;
        case 'test':
            d = test;
            break;
        default:
            d = t20;
            break;
    }

    console.log("type",req.params.type)

    let dataHash = {
        data: d,
        name: req.cookies.name,
        isLoggedIn: req.cookies.token && req.cookies.token !== 'undefined' && checkTokenValidity(req.cookies.token),
        isT20: req.params.type === 't20',
        isOdi: req.params.type === 'odi',
        isTest: req.params.type === 'test',
        type: req.params.type,
        helpers: {
            dateFormat: dateFormat,
            checkEquality: checkEquality,
            getFirstCharIfNoImage: getFirstCharIfNoImage,
            getMatchTitle: getMatchTitle,
            getMatchTitleWithDashes: getMatchTitleWithDashes
        }
    }
    res.render('predictions', dataHash);
};
