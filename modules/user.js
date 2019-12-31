
var mongoose = require("mongoose");

var passportlocalmongoose=require("passport-local-mongoose")
var Userscehma=new mongoose.Schema({
    username:String,
    password: String
})
Userscehma.plugin(passportlocalmongoose);

module.exports = mongoose.model("User", Userscehma)