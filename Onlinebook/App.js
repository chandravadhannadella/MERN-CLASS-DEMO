//1. load the libraries (libs)
var http = require('http')
// 2. create the server
const Server = http.createServer((req, res)=>{
    // 3. HTTP Status Code
    res.writeHead(200, {
        "Content-Type":"text/plain"
    })
    // 4. Statements
    res.write("Hello Welcome to AIML-C")
    res.end()

});
// 5.create the portnumber
Server.listen(6969, ()=> {
    console.log("Server Started http://127.0.0.1:6969")
})