const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    username : {
        type: String,
        required: [true, 'username missing']
    },
    email:{
        type:String,
        required:true
    },
    password : {
        type: String,
        required: [true, 'password missing']
    },

})

const userDetails = mongoose.model("user",userShema)

module.exports = userDetails