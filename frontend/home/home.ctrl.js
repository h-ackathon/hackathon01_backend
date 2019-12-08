const { dateFormat, checkEquality, getFirstCharIfNoImage } = require('../../helpers/app_helper');
const { checkTokenValidity } = require('../../helpers/api_helper');
const {getAllLeagues} = require('../../helpers/league_helper');

exports.index = async (req, res) => {

    const d = await getAllLeagues();
    
    let dataHash = {
        data: d,
        name: req.cookies.name,
        isLoggedIn: req.cookies.token && req.cookies.token !== 'undefined' 
        && checkTokenValidity(req.cookies.token),
        helpers: {
            dateFormat: dateFormat,
            checkEquality: checkEquality,
            getFirstCharIfNoImage: getFirstCharIfNoImage
        }
    };
    res.render('home', dataHash);
};
