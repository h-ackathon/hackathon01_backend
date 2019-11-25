const mongoose, {Schema} = require('mongoose');

const TeamSchema = new Schema({
    name: String,
    flag_path: String,
    players: [{type: Schema.Types.ObjectId, ref: 'players'}]
});

module.exports = mongoose.model('teams', TeamSchema);