const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})


const userModel = mongoose.model("userSchema",userSchema);
module.exports = userModel;