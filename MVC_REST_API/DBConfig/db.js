// load mongoose module
var mongoose = require("mongoose")
const Mongodb = async ()=>{ 
        //Mongodb Connect URL
        var MongodbURL = "mongodb://localhost:27017/OnlineBook"
        // mongodb connect
        mongoose.connect(MongodbURL).then(()=>{
            console.log("Mongodb Connected Successfully")
        }).catch((error)=>{
            console.log("Mongodb Connect Unsuccessfully",error)
        })
    };

module.exports =Mongodb;