const express = require("express");
const Mongodb = require("./DBConfig/db");
const UserRouterDetails = require("./Route/usersRoute"); 

Mongodb()
const App =express()
App.use(express.json())
App.use("/api/users",UserRouterDetails)

App.get("/",(req,res)=>{
         
    res.status(200).json({
        "Message":"Userdata Processing"
    })
});
App.listen(5000,()=>{
    console.log("MVC REST API Running Successfully");
    console.log("http://localhost:5000");
})
 