/* Topic, Post and Comment Models */
const mongoose = require('mongoose');

const CommentInstanceSchema = new mongoose.Schema({
    content: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    likes: Number,
    creator: {
		type: mongoose.Schema.Types.ObjectId,
	}
});

// Comments will be embedded in the Post model
const PostInstanceSchema = new mongoose.Schema({
    title: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    likes: Number,
    creator: {
		type: mongoose.Schema.Types.ObjectId,
	},
    comments: [CommentInstanceSchema]
});

// Posts will be embedded in the Topic model
const TopicInstanceSchema = new mongoose.Schema({
    title: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    id: Number,
    likes: Number,
    img: String,
    creatorUsername: String,
    creatorId: {
		type: mongoose.Schema.Types.ObjectId,
	},
    posts: [PostInstanceSchema]
});


const TopicInstance = mongoose.model('TopicInstance', TopicInstanceSchema);

module.exports = TopicInstance;