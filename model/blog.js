const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlogSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'users'},
    title: String,
    thumbnail: String,
    created_at: { type: Date, default: new Date }
});

module.exports = mongoose.model('blogs', BlogSchema);