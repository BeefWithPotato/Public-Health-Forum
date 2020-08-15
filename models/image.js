/* Image model */
'use strict';
const fs = require('fs'); 
const path = require("path");
const mongoose = require('mongoose'); 
const src = fs.readFileSync(path.join(path.resolve(__dirname, "..") + '/uploads/' + 'avatar.png')); 
const imageSchema = new mongoose.Schema({ 
    img: {
    	type: String,
    	default: src
    }
}); 


// const defaultAvatar = new imageSchema({
// 	img: src
// });
// defaultAvatar.save();

// A static method to get default avatar
imageSchema.statics.getDefaultAvatar = function() {
    console.log('defaultAvatar')
    console.log(this.img)
    return this;
}

module.exports = mongoose.model('Image', imageSchema);