var path = require("path");


module.exports = function(app){
// Routing users to the index page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/portfolios", function(req, res) {
    res.sendFile(path.join(__dirname, "public/portfolio.html"));
  });
}
  