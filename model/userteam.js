const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserTeamSchema = new Schema({
    // league: { type: Schema.Types.ObjectId, ref: 'leagues' },
    league: String,
    players: [{
        _id: { type: Schema.Types.ObjectId, ref: 'players' },
        is_playing: Boolean,
        is_captain: Boolean, 
        is_vice_captain: Boolean,
    }],
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    name: { type: String }
});

module.exports = mongoose.model('userteams', UserTeamSchema);