const mongoose = require('mongoose');
const {Schema} = mongoose;

const ScorecardSchema = new Schema({
    match: {type: Schema.Types.ObjectId, ref: 'matches'},
    players: [{type: Schema.Types.ObjectId, ref: 'players'}]
});

module.exports = mongoose.model('scorecards', ScorecardSchema);