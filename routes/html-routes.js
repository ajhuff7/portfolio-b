var path = require("path");


module.exports = function(app){
// Routing users to the index page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/portfolio.html"));
  });
}
  