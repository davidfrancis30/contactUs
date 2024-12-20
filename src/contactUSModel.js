const mongoose = require("mongoose")
const Schema =  mongoose.Schema

const contactUsDB = new Schema({
    firstName: {
        type:String
    },
    lastName: {
        type:String
    },
    queryType: {
        type:String
    },
    emailAddress: {
        type:String
    },
    message: {
        type:String
    },
    consent: {
        type:String
    },



},{timestamps:true})



module.exports = mongoose.model("messages",contactUsDB)