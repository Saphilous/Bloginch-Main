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


router.get("/technology", function (req, res) {
    BlogPost.find({tags: {$in: ["technology", "innovation"]}}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("techblogs.ejs", {blogpost:BlogPosts})
      }
    })
})


router.get("/Environment", function (req, res) {
    BlogPost.find({tags: "environment"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("environment.ejs", {blogpost:BlogPosts})
      }
    })
})


router.get("/Photography", function (req, res) {
    BlogPost.find({tags: "photography"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("photography.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/sports", function (req, res) {
    BlogPost.find({tags: "sports"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("sports.ejs", {blogpost:BlogPosts})
      }
    })
})


router.get("/International", function (req, res) {
    BlogPost.find({tags: "international"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("international.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/National", function (req, res) {
    BlogPost.find({tags: "national"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("national.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/clubs", function (req, res) {
    BlogPost.find({tags: "clubs"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("clubs.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/memes", function (req, res) {
    BlogPost.find({tags: "memes"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("memes.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/clubs", function (req, res) {
    BlogPost.find({tags: "clubs"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("clubs.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/vcecorner", function (req, res) {
    BlogPost.find({tags: "vce"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("vcecorner.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/dailyupdates", function (req, res) {
    BlogPost.find({tags: "updates"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("dailyupdates.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Artsandpoetry", function (req, res) {
    BlogPost.find({tags: "art"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Artsandpoetry.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Faccultycolumn", function (req, res) {
    BlogPost.find({tags: "Faccultycolumn"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Faccultycolumn.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Interviews", function (req, res) {
    BlogPost.find({tags: "Interviews"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Interviews.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Reviewcorner", function (req, res) {
    BlogPost.find({tags: "Reviewcorner"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Reviewcorner.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/ProgrammingHub", function (req, res) {
    BlogPost.find({tags: "Programming"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("ProgrammingHub.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Aptitude", function (req, res) {
    BlogPost.find({tags: "Aptitude"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Aptitude.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Offers", function (req, res) {
    BlogPost.find({tags: "Offers"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Offers.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/PositivityCorner", function (req, res) {
    BlogPost.find({tags: "Positive"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("PositivityCorner.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Advertising", function (req, res) {
    BlogPost.find({tags: "Advertising"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Advertising.ejs", {blogpost:BlogPosts})
      }
    })
})

router.get("/Chief's_Column", function (req, res) {
    BlogPost.find({tags: "Chief"}, function (err, BlogPosts) {
      if(err)
      {
          console.log("error!!!!!!!!");
      }  
      else
      {
          console.log(BlogPosts)
          res.render("Chief's_Column.ejs", {blogpost:BlogPosts})
      }
    })
})


module.exports=router
