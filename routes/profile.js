var data = require("../data.json");
var name = "Generic Name";
exports.view = function(req, res){
 console.log("in profile");
   res.render('profile',data);
};

exports.setName = function(req, res){
  name = req.params.name;
}

exports.getName = function(req, res){
  console.log("Name is "+name);
  res.json({'name':name});
}
//function + button to change weight
//function + button to change height
