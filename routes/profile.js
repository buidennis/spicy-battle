var data = require("../data.json");
var index = require("./index.js");


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

















exports.changeAge = function(request, response){
  var name = index.name;
  var i = 0;
  for(; i < data.members.length; i++){
      if(data.members[i].info.name === name){
          break;
      }
  }
  data.members[i].info.age = "100";
  console.log(name);
  console.log(data.members[i].info.age);
}
exports.changeSex = function(request, response){
    var name = index.name;
  var i = 0;
  for(; i < data.members.length; i++){
      if(data.members[i].info.name === name){
          break;
      }
  }
  data.members[i].info.sex = "100";
  console.log(name);
  console.log(data.members[i].info.age);
}

exports.changeWeight = function(request, response){
  var name = index.name;
  var i = 0;
  for(; i < data.members.length; i++){
      if(data.members[i].info.name === name){
          break;
      }
  }
  data.members[i].info.weight = "100";
  console.log(name);
  console.log(data.members[i].info.age);

}


exports.changeHeight = function(request, response){
    var name = index.name;

  var i = 0;
  for(; i < data.members.length; i++){
      if(data.members[i].info.name === name){
          break;
      }
  }
  data.members[i].info.height = "100";
  console.log(name);
  console.log(data.members[i].info.age);
}
