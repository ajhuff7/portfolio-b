var express = require("express");
const fs = require("fs");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;



app.use(express.static("public"));

// Requiring routes 
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Routing users to the index page.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/portfolio.html"));
});