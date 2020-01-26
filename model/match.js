const mongoose = require('mongoose');
const {Schema} = mongoose;

const MatchSchema = new Schema({
    title: {type: String, required: [true, 'Title is required']},
    start_date_time: {type: Date, required: [true, 'Start Date is required']},
    end_date_time: {type: Date, required: [true, 'End Date is required']},
    type: {type: String, required: [true, 'Type is required']},
    teams: [{type: Schema.Types.ObjectId, ref: 'teams', required: [true, 'Teams are required']}],
    league: {type: Schema.Types.ObjectId, ref: 'leagues', required: [true, 'League is required']}
});

module.exports = mongoose.model('matches', MatchSchema);