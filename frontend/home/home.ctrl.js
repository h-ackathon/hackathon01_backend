const { dateFormat, checkEquality, getFirstCharIfNoImage, getMatchTitle } = require('../../helpers/app_helper');
const { checkTokenValidity } = require('../../helpers/api_helper');
const {getAllLeagues} = require('../../helpers/league_helper');
const t20 = require('../../matches_data/t20i');

exports.index = async (req, res) => {

    // const d = await getAllLeagues();

    console.log("t20is", t20)
    
    let dataHash = {
        data: t20,
        name: req.cookies.name,
        isLoggedIn: req.cookies.token && req.cookies.token !== 'undefined' 
        && checkTokenValidity(req.cookies.token),
        helpers: {
            dateFormat: dateFormat,
            checkEquality: checkEquality,
            getFirstCharIfNoImage: getFirstCharIfNoImage,
            getMatchTitle: getMatchTitle
        }
    };
    res.render('home', dataHash);
};
