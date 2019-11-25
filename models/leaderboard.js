const mongoose, {Schema} = require('mongoose');

const LeaderboardSchema = new Schema({
    match: {type: Schema.Types.ObjectId, ref: 'matches'},
    user: {type: Schema.Types.ObjectId, ref: 'users'},
    points: Number
});

module.exports = mongoose.model('leaderboards', LeaderboardSchema);