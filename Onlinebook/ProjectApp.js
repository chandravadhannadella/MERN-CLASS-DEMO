//import the package for Express 
var express = require('express'); 
var main=require("./MainOperate");
const files=require('fs'); 
// Call the Express js Function
var app = express();
// convert the dat to displapy format is json
app.use(express.json());
// Call url and method 
// file Write 
var text=
{
  "message": "Welcome to Home Page",
  "data": "welcome to Node JS Programming"
}
;
files.writeFileSync("Textdata.json",JSON.stringify(text));

// file Read
var data=files.readFileSync("Textdata.json","utf8");
data=JSON.parse(data);

app.get("/Home",(req,res)=>{
    res.json({message: "Welcome to Home Page", data: data});
});
app.get("/About",(req,res)=>{
    var results = main.sub(100, 20);
    res.json({message: "Welcome to About Page", result: results});
});
app.get("/Clients",(req,res)=>{
    var results = main.mul(100, 20);
    res.json({message: "Welcome to Clients Page", result: results});
}); 
app.listen(9090,()=>{
     console.log("Server Started http://127.0.0.1:9090/");
})