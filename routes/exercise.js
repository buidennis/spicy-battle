
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  var name = req.params.name;
  console.log("Exercise name is: " + name);
  console.log("in exercise");
  res.render('exercise', data);
};
