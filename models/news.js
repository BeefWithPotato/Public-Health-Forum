/* News Models */
const mongoose = require('mongoose');
const imgModel = require('./imgModel');

// Each News embedded in the News model
const NewsInstanceSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    creatorUsername: String,
    image: {
		type: mongoose.Schema.Types.ObjectId,
    },
    comments: [CommentInstanceSchema]
});

// All News embedded in the NewsList model
const NewsListSchema = new mongoose.Schema({
    mainPost: {
		type: mongoose.Schema.Types.ObjectId,
    },
    News: [NewsInstanceSchema]
});

const NewsInstance = mongoose.model('NewsInstance', NewsInstanceSchema);
const NewsList = mongoose.model('NewsList', NewsListSchema);

module.exports = {NewsInstance, NewsList};