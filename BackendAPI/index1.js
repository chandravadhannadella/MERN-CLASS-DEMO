var express = require('express');
// npm install mongoose
// load mongoose module
var mongoose = require("mongoose")
//Mongodb Connect URL
var MongodbURL = "mongodb://localhost:27017/OnlineBook"
// Connect the mongoDB
mongoose.connect(MongodbURL).then(()=>{
    console.log("Mongodb Connected Successfully")
}).catch(()=>{
    console.log("Mongodb Connect Unsuccessfully")
})
// create the Mongodb table
const UsersSchema = mongoose.Schema( {
    UserId:Number,
    UserName:String,
    UserEmail:String,
    UserPhone:String,
    UserAddress:String
}
)

const Users = mongoose.model("Users",UsersSchema)
/* input data --> postman, thunder Client
{
    
    "UserId":1,
    "UserName":"Nagamani",
    "UserEmail":"mani@gmail.com",
    "UserPhone":"9874568678",
    "UserAddress":"hyd"

}
*/
const { get } = require('mongoose');
const App = express()
App.use(express.json())

// To Store the new user data in mongodb
//Url= /addNewUser
App.post("/addNewUser", async (req, res)=>{

    try {
    const {
    UserId,
    UserName,
    UserEmail,
    UserPhone,
    UserAddress
    } = req.body;
    const NewUser = {
    "UserId"          :UserId,
    "UserName"        :UserName,
    "UserEmail"       :UserEmail,
    "UserPhone"       :UserPhone,
    "UserAddress"     :UserAddress
    }

    const NewUserData = new Users(NewUser)
    const SaveUser = await NewUserData.save()

    res.status(200).json({
        "Message":"New User created success",
        "User":SaveUser,
    });
    } 
catch(error){
    res.status(500).json({
        "Message":"Internal Server Error",
        "User":error.Message
    });
}
});
//View the All Users from Mongobd users
//URL --->/viewUsers
App.get("/viewUsers",async (req, res)=>{
    try{
        const ViewUsers=await Users.find();
        res.status(200).json({
        "Message":"Getting User details success",
        "User":ViewUsers,
    });
} catch(error){
    res.status(500).json({
        "Message":"Internal Server Error",
        "User":error.Message
    });
}
});
//View the only one User from Mongobd-> users->Collections
//Route Parameter
//URL --->/viewUsers/1
App.get("/viewUsers/:id",async (req, res)=>{
    try{
        var id = req.params.id;
        const ViewUsers=await Users.findOne( {UserName:id});
        if (!ViewUsers){
            res.status(404).json({
                "Message":"record not found"
            });
        }
        res.status(200).json({
        "Message":"Getting One User details success",
        "User":ViewUsers,
    });
} catch(error){
    res.status(500).json({
        "Message":"Internal Server Error",
        "User":error.Message
    });
}
});






App.get("/",(req,res)=> {
    res.json({
        "Message": "Welcome HomePage of AIML-C"
    });
});
//Create the json data
var user_old_data=[{
                        "id":1,
                        "name":"Nagamani",
                        "course": "AIML-C",
                        "roll": 101
                    },
                    {
                        "id":2,
                        "name":"Shiva",
                        "course": "AIML-C",
                        "roll": 102
                    }
        ]

// post method
App.post("/loadUser",(req, res)=> {
    const {name, course, roll}=req.body;

    const newUser= {
        "id":user_old_data.length+1,
        "name":name,
        "course": course,
        "roll": roll
    }
    // add a newData to old data
    user_old_data.push(newUser)
    res.status(200).json({
        "Message": "Create the user details Success",
        "All User_details": user_old_data
    });

});


//Url Request Parameter To get the User with userId

//http://localhost:3001/viewUser/1
App.get("/viewuser/:id", (req, res)=>{
    var id=req.params.id;
    const getUserDetails=user_old_data.find(u =>u.id == id);
    if(!getUserDetails){
        return res.status(404).json({
        "Message": "To get the user details Unsuccess",
        "View_User_details": "Not Found the User details"
    });
    }
    res.status(200).json({
        "Message": "To get the user details Success",
        "View_User_details": getUserDetails
    });
});

// Put Method --> To update the user details
//http://localhost:5001/updateUser/1
App.put("/updateUser/:id", (req, res)=>{
    var id=req.params.id;
    const getUsers = user_old_data.find(u => u.id == id);
    if(!getUsers){
        res.status(400).json({
            "Message": "No Records Found"
        });
    }

    const {name, course, roll}=req.body;
    getUsers.name=name;
    getUsers.course=course;
    getUsers.roll=roll;

    res.status(200).json({
        "Message": "Upadated User details Success",
        "User_details": getUsers
    });

});
// Delete Method --> To delete the user records
//http://localhost:5001/deleteUser/1
App.delete("/deleteUser/:id", (req, res)=>{
    var id=req.params.id;
    const getUsersIndex = user_old_data.findIndex(u => u.id == id);
    if(!getUsersIndex== -1){
        res.status(400).json({
            "Message": "No Records Found"
        });
    }
    const deleteUserdata=user_old_data.splice(getUsersIndex,1)
    res.status(200).json({
        "Message": "Delete User Details Success"
    });

});
//Using Get Method To get the All User Records
//http://localhost:5001/allUser/




App.listen(5001, (req, res)=>{
    console.log("Express Js Server Running Success")
    console.log("http://localhost:5001")

});