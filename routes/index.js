
/*
 * GET home page.
 */
var data = require('../data.json');
var name = "Generic Name";

// function to change the bar for the experience
//json.members.info.experienceRatio
//Modify the bar ratio * xbar

exports.view = function(req, res){
  console.log("in home");
  console.log(data);
  console.log('name');
  res.render('index', data);
};

exports.setName = function(req, res){
  name = req.params.name;
}

exports.getName = function(req, res){
  console.log("Name is "+name);
  for(var i = 0; i < data.members.length; i++){
    if(data.members[i].info.name === name){
      break;
    }
  }
  res.json(data.members[i]);
}
