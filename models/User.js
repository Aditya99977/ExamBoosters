const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },
    
    role: {
    type: String,
    enum: ["student", "admin"],
    default: "student"
},

    examTarget:{
        type:String,
        default:"IBPS"
    },

    score:{
        type:Number,
        default:0
    },

    testsAttempted:{
        type:Number,
        default:0
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);