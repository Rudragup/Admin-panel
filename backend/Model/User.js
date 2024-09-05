const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false
    },
    token:{
        type:String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;