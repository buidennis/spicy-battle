var data = require("../data.json");
exports.view = function(req, res){
 console.log("in profile");
   res.render('profile',data);
};
//function + button to change weight
//function + button to change height
