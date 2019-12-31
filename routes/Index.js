var express = require('express')
const router = express.Router()
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

router.get("/", function(req, res)
{
    res.render('landing.ejs')
})



//comments==============================================================================

 

//  ==================================================================================
// AUTH ROUTES
//  ==================================================================================

// show register form
router.get("/register", function(req, res){
    res.render("register.ejs"); 
 });
 //handle sign up logic
 router.post("/register", function(req, res){
     var newUser = new User({username: req.body.username});
     User.register(newUser, req.body.password, function(err, user){
         if(err){
             console.log(err);
             return res.render("register.ejs");
         }
         Passport.authenticate("local")(req, res, function(){
            res.redirect("/blogs"); 
         });
     });
 });
 router.get("/login", function(req, res){
    res.render("login.ejs"); 
 });
 router.post("/login", Passport.authenticate("local", 
 {
     successRedirect: "/blogs",
     failureRedirect: "/login"
 }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/blogs");
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







 module.exports=router