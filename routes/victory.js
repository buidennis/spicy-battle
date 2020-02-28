
/*
 * GET home page.
 */
var data = require('../data.json');
var name = "Generic Name";

// function to change the bar for the experience
//json.members.info.experienceRatio
//Modify the bar ratio * xbar

exports.view = function(req, res){
  console.log("in victory");
  console.log(data);
  res.render('victory', data);
};

exports.victoryInfo = function(req, res){
  for(var i = 0; i < data.members.length; i++){
    if(data.members[i].info.name === req.params.name){
      break;
    }
  }
  res.json(data.members[i]);
}
