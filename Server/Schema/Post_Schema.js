const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    UserName:String,
    Spot:String,
    Location:String,
    Description:String,
    Image:String,
    Like:Number,
    Unlike:Number,
    Comment:String
});


const post = mongoose.model('post', postSchema);

module.exports = post;