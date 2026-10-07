const express = require("express");
const Router=express.Router();

const   { 
            CreateNewUser,
            GetAllUsers,
            GetOneUser
        }=require("../Controller/usersController")

Router.post("/",CreateNewUser);
Router.get("/",GetAllUsers);
Router.get("/:id",GetOneUser);

module.exports=Router;