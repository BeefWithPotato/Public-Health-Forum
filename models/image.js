/* Image model */
'use strict';
const fs = require('fs'); 
const path = require("path");

const mongoose = require('mongoose'); 
const imageSchema = new mongoose.Schema({ 
    img: {
    	type: String,
    	data: Buffer
    }

}); 

const Image = new mongoose.model('Image', imageSchema);

const defaultAvatar = new Image({
    img: {
        type: "image/png",
        data: fs.readFileSync(path.join(__dirname, '/../uploads/avatar.png'))
    }
});

imageSchema.statics.defaultAvatar = defaultAvatar;

// A static method to get default avatar
imageSchema.statics.getDefaultAvatar = function () {
    console.log('defaultAvatar');
    console.log(defaultAvatar);
    return defaultAvatar;
}

module.exports = Image;
