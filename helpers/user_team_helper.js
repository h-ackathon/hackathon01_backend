const UserTeamModel = require('../models/userteam');

exports.createUserTeam = async (param) => {
    try {
        return UserTeamModel.create(param);
    }
    catch (err) {
        console.log("Error logging in user", err);
        return false;
    };
};
