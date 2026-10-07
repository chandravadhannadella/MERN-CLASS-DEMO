var mongoose = require("mongoose")
const UsersSchema=  new  mongoose.Schema({
        UserId      :{type:Number,required:true,unique:true},
        UserName    :{type:String,required:true},
        UserEmail   :{type:String,required:true,unique:true},
        UserPhone   :{type:String,required:true},
        UserAddress :{type:String,required:true}
});
const Users = mongoose.model("Users",UsersSchema)

module.exports=Users