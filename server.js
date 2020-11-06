var express = require("express");
const fs = require("fs");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;



app.use(express.static("public"));

// Requiring routes 
// =============================================================
require("./routes/html-routes.js")(app);


app.listen(PORT, function(){
  console.log("Connected to PORT");
})