var express = require('express')
var router = express.Router()
var bodyparser   =  require("body-parser")
var methodOverride = require("method-override")
const mongoose   =  require('mongoose');
var Passport=require("passport")
var LocalStrategy= require("passport-local")
var passportlocalmongoose=require("passport-local-mongoose")
var BlogPost  = require("../modules/blogpost")
var Comment    = require("../modules/comment")
var User=require("../modules/user")
var middleware=require("../middleware/index")
router.use(bodyparser.urlencoded({extended: true}));
router.use(methodOverride("_method"))



router.get("/blogs", function (req, res) {
    BlogPost.find({}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
        res.render("index.ejs", {BlogPosts:BlogPosts});
      }
    })
})

// the above code is the index as in the landing page

router.post("/blogs",userpresent, function (req, res) {

    var title = req.body.title;
    var image = req.body.image;
    var bodys = req.body.bodys;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newBlogPost = {title: title, image: image, bodys: bodys, author:author}
    // Create a new BlogPost and save to DB
    BlogPost.create(newBlogPost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to BlogPosts page
            console.log(newlyCreated);
            console.log(author.username)
            res.redirect("/blogs");
        }
    });
});







    // Create a new BlogPost and save to DB
   // BlogPost.create(req.body.blogpost, function(err, newlyCreated){
     //   if(err){
       //     res.render("/blogs/new")
        //}
        //else{
          //  console.log(newlyCreated)
            //res.redirect("/blogs")
        //}
      //})
    
//})

router.get("/blogs/new", userpresent,function (req, res) {
    res.render("writing.ejs")
})



// this above is to create new

router.get("/blogs/:id", function (req, res){
    BlogPost.findById(req.params.id, function(err, blogdescript){
        if(err){
            res.send("error")
            res.redirect("/blogs")
        }
        else{
            res.render("description.ejs", {blogdescript:blogdescript})
        }
    })
})
// the above is to show the blog

router.get("/blogs/:id/update", userpresent, middleware.checkBlogpostOwnership, function (req, res) {
    BlogPost.findById(req.params.id, function (err, editnew) {
        if(err)
        {
            res.redirect("/blogs")
        }
        else
        {
            res.render("writingupdate.ejs", {blog:editnew})
        }
      })
  })


router.put("/blogs/:id", userpresent, middleware.checkBlogpostOwnership, function (req, res) {
    BlogPost.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedblog) {
        if(err){
            res.redirect("/blogs/:id/update")
        }
        else
        {
            res.redirect("/blogs/"+req.params.id)
        }
      })
  })
// the edit and update routes are done by now

router.delete("/blogs/:id", userpresent, middleware.checkBlogpostOwnership, function (req, res) {
    BlogPost.findByIdAndRemove(req.params.id, function (err) {
        if(err)
        {
            res.redirect("/blogs")
        }
        else{
            res.redirect("/blogs")
        }
    })
})






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





module.exports=router
