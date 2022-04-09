const mongoose = require('mongoose');
const Schema = mongoose.Schema


const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    url: {
        type: String,
    },
    status: {
        type: String,
        enum: ['TỰ TẬP', 'YOGA KÈM PT', 'GYM KÈM PT']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users' ,//noi' vs table user  

    }
    
   
})
module.exports = mongoose.model('posts', PostSchema)