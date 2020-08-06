/* Mainpage Models */
const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const FeaturedPost = new mongoose.Schema({
    content: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    title: String,
    date: String,
    img: String,
});

const FeaturedPostsSchema = new mongoose.Schema({
    content: {
    	type: String,
    	minlegth: 1,
    	required: true
    },
    featuredPosts: [FeaturedPost],
    mainFeaturedPost: ObjectID
});

const FeaturedPosts = mongoose.model('FeaturedPosts', FeaturedPostsSchema);

module.exports = FeaturedPosts;