/* Image model */
'use strict';
const fs = require('fs'); 

const mongoose = require('mongoose'); 
  
const imageSchema = new mongoose.Schema({ 
    img: { 
        type: String,
        data: Buffer 
    }
}); 

const defaultAvatar = new imageSchema();
defaultAvatar.img.data = fs.readFileSync(path.join(__dirname + '/uploads/' + 'avatar.png')); 
defaultAvatar.img.contentType = 'image/png';
defaultAvatar.save();

// A static method to get default avatar
UserSchema.statics.getDefaultAvatar = function() {
    console.log('defaultAvatar')
    console.log(defaultAvatar)
    return defaultAvatar;
}

module.exports = new mongoose.model('Image', imageSchema);