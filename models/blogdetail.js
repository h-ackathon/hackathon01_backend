const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlogDetailSchema = new Schema({
    blog: {type: Schema.Types.ObjectId, ref: 'blogs'},
    description: String
});

module.exports = mongoose.model('blogdetails', BlogDetailSchema);