const LeagueModel = model('league');

exports.getAllLeagues = async (email) => {
    try {
        return await LeagueModel.find();
    }
    catch (err) {
        console.log("Error logging in user", err);
        return false;
    };
};
