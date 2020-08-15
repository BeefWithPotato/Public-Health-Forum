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

// A static method to get default avatar
imageSchema.statics.getDefaultAvatar = function () {
    console.log(defaultAvatar);
    return defaultAvatar;
}

const image = new mongoose.model('Image', imageSchema);
const defaultAvatar = new image({
    img: {
        type: "image/png",
        data: fs.readFileSync(path.join(__dirname, '/../uploads/avatar.png'))
    }
});

module.exports = image;
