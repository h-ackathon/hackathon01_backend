const mongoose = require('mongoose');
const {Schema} = mongoose;

const MatchStatSchema = new Schema({
    league: {type: String, ref: 'leagues'},
    match: {type: Schema.Types.ObjectId, ref: 'matches'},
    player: {type: Schema.Types.ObjectId, ref: 'player66
    run_outs: Number,
    runs_scored: Number,
    balls_played: Number,
    wickets_taken: Number,
    balls_bowled: Number,
    runs_given: Number,
    sixes: Number,
    fours: Number,
    extras: Number,
});

module.exports = mongoose.model('matchstats', MatchStatSchema);