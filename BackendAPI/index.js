// load the module
var express= require('express')
var mongoose= require('mongoose')
// Express js function
var App= express()
//url, Method
MongodbUrl="mongodb://localhost:27017/Test"
mongoose.connect(MongodbUrl)
    .then(()=>{ console.log("Mongodb Connected Success")})
    .catch((errr)=>{  console.log("Mongodb Connected Unsuccess")})



App.get("/",(req,res)=>{
    res.send("Welcome to AIML-C")
});

App.get("/home",(req,res)=>{
    res.send("Welcome to AIML-C Home")
});
App.get("/About",(req,res)=>{
    res.send("Welcome to AIML-C About")
});
App.get("/Client",(req,res)=>{
    res.send("Welcome to AIML-C client")
});


//Request Parameters
App.get("/Student/:id",(req,res)=>{
    var id=req.params.id
    res.send(`Welcome to AIML-C Student Id: ${id}`)
});

App.get("/Product/:productId",(req,res)=>{
    var Pid=req.params.productId
    res.json({
        message:"Product details ",
        productId:Pid
    })
});
//Query Parameters
App.get("/Product",(req,res)=>{
    var color=req.query.color;
    res.json({
        message:"Product details ",
        colorname:color
    })
});

//Multiple Query Parameters
App.get("/Product",(req,res)=>{
    var color=req.query.color;
    var pid=req.query.pid;
    res.json({
        message:"Product details ",
        color_name:color,
        product_Id:pid
    })
});
// Backend Middleware Data request
App.use((req,res,next)=>{
    console.log("request Send")
    next();
})



App.listen(5000,()=>{
    console.log("Express Js Server Started.")
    console.log("http://localhost:5000/")
})


