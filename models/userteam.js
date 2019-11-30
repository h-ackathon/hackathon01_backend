const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserTeamSchema = new Schema({
    match: {type: Schema.Types.ObjectId, ref: 'matches'},
    players: [{type: Schema.Types.ObjectId, ref: 'players'}],
    user: {type: Schema.Types.ObjectId, ref: 'users'}
});
module.exports = mongoose.model('userteams', UserTeamSchema);