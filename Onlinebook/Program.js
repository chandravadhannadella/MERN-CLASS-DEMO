//1. load the libraries (libs)
// http, fs, express, crypto
var http = require("http");
var main = require("./MainOperate");
// 2. create the server
const Server = http.createServer((req, res) => {
  //3. check the url and method
  if (req.url == "/" && req.method == "GET") {
    var resutls = main.add(10, 20);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Home results: " + resutls);
  } else if (req.url == "/about" && req.method == "GET") {
    var resutls = main.sub(100, 20);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to About results: " + resutls);
  } else if (req.url == "/clients" && req.method == "GET") {
    var resutls = main.mul(100, 20);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Clients results: " + resutls);
  } else if (req.url == "/services" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Services");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});
// 4. create the portnumber
Server.listen(6969, () => {
  console.log("Server Started http://127.0.0.1:6969/");
});
//node Program.js
