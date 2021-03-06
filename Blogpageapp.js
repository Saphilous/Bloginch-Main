var express      =  require('express')
const app        =  express()
var path=require("path")
var bodyparser   =  require("body-parser")
var methodOverride = require("method-override")
const mongoose   =  require('mongoose')
var flash= require("connect-flash")
var Passport=require("passport")
var LocalStrategy= require("passport-local")
var passportlocalmongoose=require("passport-local-mongoose")
var BlogPost  = require("./modules/blogpost")
var Comment    = require("./modules/comment")
var User=require("./modules/user")
var indexroutes=require("./routes/Index")
var blogroutes=require("./routes/Blogs")
var categoryroutes=require("./routes/Categories")
var commentroutes=require("./routes/Comments")
var middleware=require("./middleware/index")
//mongoose.connect("process.env.DATABASEURL");
mongoose.connect('mongodb+srv://saphilous:maheshreddy@bloginch-huiub.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.use(bodyparser.urlencoded({extended: true}));
app.use(methodOverride("_method"))
app.use(express.static(__dirname + "/public"));
// mongoose connection line

//the session in express

app.use(require("express-session")({
    secret: "Saphilous Supreme fivetwothreeseven",
    resave:false,
    saveUninitialized:false
}))



//The required packages for auth

app.use(Passport.initialize());
app.use(Passport.session());
Passport.use(new LocalStrategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());


  app.use(function(req,res,next){
    res.locals.currentuser=req.user;
    next();
  })




app.use(indexroutes)
app.use(blogroutes)
app.use(commentroutes)
app.use(categoryroutes)

// mongo db must be connected and now has a model to follow although not necessarily
// Restful routes start now
//==========================================starts===============================================//
// this above one must be present at all times....more matter will be added soon to the topic Saphilous




















// program ends above this line
const port = process.env.PORT||3000

app.listen(port, () => console.log(`Example app listening on port port!`))
