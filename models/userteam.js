const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserTeamSchema = new Schema({
    league: {type: Schema.Types.ObjectId, ref: 'leagues'},
    players: [{isCaptain: Boolean, isViceCaptain: Boolean, id: { type: Schema.Types.ObjectId, ref: 'players' }}],
    user: {type: Schema.Types.ObjectId, ref: 'users'},
    name: {type: String}
});
module.exports = mongoose.model('userteams', UserTeamSchema);