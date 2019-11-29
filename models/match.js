const mongoose = require('mongoose');
const {Schema} = mongoose;

const MatchSchema = new Schema({
    title: String,
    start_date_time: String,
    end_date_time: String,
    teams: [{type: Schema.Types.ObjectId, ref: 'teams'}],
    league: {type: Schema.Types.ObjectId, ref: 'leagues'}
});

module.exports = mongoose.model('matches', MatchSchema);