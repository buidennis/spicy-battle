
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  var name = req.params.name;
  console.log("Exercise name is: " + name);
  console.log("/videos/" + name + ".mp4")
  console.log("in exercise");
    res.render('exercise', {
      'exerciseName': name,
      'instructionVideo': '/videos/'+ name +'.mp4'
    });
};
