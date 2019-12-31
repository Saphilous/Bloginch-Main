var Blogpost = require("../modules/blogpost")
var Comment = require("../modules/comment");


// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkBlogpostOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Blogpost.findById(req.params.id, function(err, foundBlogpost){
           if(err){
               res.redirect("/blogs");
           }  else {
               // does user own the Blogpost?
            if(foundBlogpost.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("/blogs");
            }
           }
        });
    } else {
        res.redirect("/blogs");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("/blogs");
           }  else {
               // does user own the comment?
            if(foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("/blogs");
            }
           }
        });
    } else {
        res.redirect("/blogs");
    }
}

middlewareObj.userpresent = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;