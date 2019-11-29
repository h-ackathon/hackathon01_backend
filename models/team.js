const mongoose = require('mongoose');
const {Schema} = mongoose;

const TeamSchema = new Schema({
    name: String,
    flag_path: String,
    players: [{type: Schema.Types.ObjectId, ref: 'players'}],
    league: {type: Schema.Types.ObjectId, ref: 'leagues'}
});

module.exports = mongoose.model('teams', TeamSchema);