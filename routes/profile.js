var data = require("../data.json");
exports.view = function(req, res){
 console.log("in profile");
   res.render('profile',data);
};
