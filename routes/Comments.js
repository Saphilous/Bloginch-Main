var express = require('express')
const router = express.Router({mergeParams: true})
var bodyparser   =  require("body-parser")
var path=require("path")
var methodOverride = require("method-override")
const mongoose   =  require('mongoose');
var Passport=require("passport")
var LocalStrategy= require("passport-local")
var passportlocalmongoose=require("passport-local-mongoose")
var BlogPost  = require("../modules/blogpost")
var Comment    = require("../modules/comment")
var User=require("../modules/user")
var middleware=require("../middleware/index")



router.get("/blogs/:id/comments", userpresent, function(req, res){
    //find the campground with provided ID
    BlogPost.findById(req.params.id).populate("comments").exec(function(err, blog){
        if(err){
            console.log(err);
        } else {
            console.log(blog)
            //render show template with that campground
            res.render("comments.ejs", {blog: blog});
        }
    });
});



router.post("/blogs/:id/comments", function(req, res){
   //lookup blog using ID
   BlogPost.findById(req.params.id).populate("comments").exec(function(err, blog){
       if(err){
           console.log(err);
           res.redirect("/blogs");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               comment.author.id=req.user._id
               comment.author.username= req.user.username
               comment.save()
               console.log(req.user.username)
               blog.comments.push(comment);
               blog.save();
               res.redirect('/blogs/' + blog._id + '/comments' );
           }
        });
       }
   });
});



router.get("/blogs/:id/comments/new", userpresent, function(req, res){
    // find blog by id
    BlogPost.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
        } else {
             res.render("newcomment.ejs", {blog: blog});
        }
    })
});


router.get("/blogs/:id/comments/:comment_id/update", middleware.checkCommentOwnership ,function(req, res)
{
    Comment.findById(req.params.comment_id, function(err, comment)
    {
        if(err)
        {
            res.redirect("/blogs/"+req.params.blogid)
        }
        else
        {
            res.render("commentupadate.ejs", {blogid:req.params.id, comment: comment})
        }
    })
})

router.put("/blogs/:id/comments/:comment_id",middleware.checkCommentOwnership ,function(req, res)
{
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/blogs/" + req.params.id + "/comments");
        }
     })
})


router.delete("/blogs/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
    });
});

function userpresent(req, res, next)
{
    if(req.isAuthenticated()){
        return next()
    }
    else
    {
        res.redirect("/login")
    }
}



module.exports= router