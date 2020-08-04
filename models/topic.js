/* Topic, Post and Comment Models */

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    likes: Number,
    creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

// Comments will be embedded in the Post model
const PostSchema = new mongoose.Schema({
    title: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    likes: Number,
    creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
    comments: [CommentSchema]
});

// Posts will be embedded in the Topic model
const TopicSchema = new mongoose.Schema({
    title: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    likes: Number,
    creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
    posts: [PostSchema]
});


const Topic = mongoose.model('Topic', TopicSchema);

module.exports = { Topic };