/* Image model */
'use strict';
const fs = require('fs'); 
const path = require('path');
const mongoose = require('mongoose'); 
  
const imageSchema = new mongoose.Schema({ 
    img: { 
        type: String,
        data: Buffer 
    }
});

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

// const defaultAvatar = new imageSchema();
// defaultAvatar.img.data = fs.readFileSync(path.join(__dirname + '/uploads/' + 'avatar.png'));
// defaultAvatar.img.contentType = 'image/png';
// defaultAvatar.save();
//
// // A static method to get default avatar
// UserSchema.statics.getDefaultAvatar = function() {
//     console.log('defaultAvatar')
//     console.log(defaultAvatar)
//     return defaultAvatar;
// }

module.exports = image;