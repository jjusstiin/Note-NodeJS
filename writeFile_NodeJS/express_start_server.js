// 先 npm install express
var express = require("express");
var app = express();
app.use(express.static("./public"))
app.listen(80);
console.log('ok');