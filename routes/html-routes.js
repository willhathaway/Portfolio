// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/html/index.html"));
    });

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/html/about.html"));
    });

    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/html/portfolio.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/html/contact.html"));
      });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/html/index.html"));
    });
}