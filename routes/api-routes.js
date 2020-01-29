module.exports = function(app) {

    app.post("/api/message", function(req, res) {
        
        console.log(req.body)

        res.end();
        
      });
  
    };