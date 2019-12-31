var mongoose = require("mongoose");

var blogpostschema = new mongoose.Schema({
   title: String,
   image: String,
   bodys: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]

});

module.exports = mongoose.model("Blogpost", blogpostschema);
