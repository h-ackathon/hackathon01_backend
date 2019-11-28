const { dateFormat, checkEquality, getFirstCharIfNoImage } = require('../../helpers/app_helper');
const { checkTokenValidity } = require('../../helpers/api_helper');

exports.index = async (req, res) => {
    console.log("homepage", req.cookies.token, checkTokenValidity(req.cookies.token));
    let dataHash = {
        data: null,
        name: req.cookies.name,
        isLoggedIn: req.cookies.token && req.cookies.token !== 'undefined' && checkTokenValidity(req.cookies.token),
        helpers: {
            dateFormat: dateFormat,
            checkEquality: checkEquality,
            getFirstCharIfNoImage: getFirstCharIfNoImage
        }
    };
    res.render('home', dataHash);
};
