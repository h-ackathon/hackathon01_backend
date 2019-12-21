const { dateFormat, checkEquality, getFirstCharIfNoImage } = require('../../helpers/app_helper');
const { checkTokenValidity } = require('../../helpers/api_helper');
const { getAllLeagues } = require('../../helpers/league_helper');
const { addPlayer } = require('../../helpers/query_helper_player');

exports.index = async (req, res) => {
    const allLeagues = await getAllLeagues();
    let dataHash = {
        leagues: allLeagues,
    };
    res.render('addplayer', dataHash);
};

exports.addPlayer = async (req, res) => {
    console.log(req.body.player);
    const result = await addPlayer(req.body.player);
    res.send(result);
};
