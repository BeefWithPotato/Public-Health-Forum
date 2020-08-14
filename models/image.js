/* Image model */
'use strict';
const fs = require('fs'); 
const multer = require('multer'); 
const imgModel = require('./models/image'); 

const mongoose = require('mongoose'); 
  
const imageSchema = new mongoose.Schema({ 
    img: { 
        type: String,
        data: Buffer 
    }
}); 

// const defaultAvatar = function() {
//     const defaultImg = new imageSchema();
//     defaultImg.img.data = fs.readFileSync(path.join(__dirname + '/uploads/' + 'avatar.png')); 
//     defaultImg.img.contentType = 'image/png';
//     defaultImg.save();
// }
// // A static method to get default avatar
// UserSchema.statics.getDefaultAvatar = function() {
//     return defaultAvatar;
// }

module.exports = new mongoose.model('Image', imageSchema);