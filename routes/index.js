
/*
 * GET home page.
 */
var data = require('../data.json');

// function to change the bar for the experience
//json.members.info.experienceRatio
//Modify the bar ratio * xbar

exports.view = function(req, res){
  console.log("in home");
  console.log(data);
  res.render('index', data);
};
