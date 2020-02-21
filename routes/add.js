var data = require("../data.json");
var index = require('./index.js');

exports.SignIn = function(request, response) {
	// Your code goes here
	// var email = request.query.email;
	// var password = request.query.password;

	// // if(data.members.email == email){
	// // if(data.members.info.password == password){
	// response.render('index', data);
	// // }
	// // } else {
	// // response.render('login');
	// // }
  	// console.log("Email is " + email);
	// console.log("password is "+password);
	// console.log("DB Email is "+ data.members[0].email);
	// // console.log("DB password is "+ data.members.)

	// console.log("Successfully logged in");

	//Go through DB to check if person present
	var found = false;
	for (var i = 0; i < data.members.length; i++) { 

		if(request.params.name.toLowerCase() === data.members[i].info.name.toLowerCase()){
			found = true
			break;
		}
		console.log(request.params.name.toLowerCase());
		console.log(data.members[i].info.name);
	}

	if(found == false){
		var newUser = {
				"email":"none",
				"current_hp": 100
				"maximum_hp": 100
            	"info": {
					"password": "none",
					"name": request.params.name,
					"weight":0,
					"height":0,
					"age": 0,
					"sex": "Male",
					"level": 1,
					"experienceNextLevel": 100,
					"experienceRatio": 1
					"experience": 0,
					"calories_burnt":0
						},
				"workout":{
					"SitUps":0,
					"PushUps":0,
					"Squats":0,
					"JumpingJacks":0
				},

		}

		data.members.push(newUser);
		console.log(newUser)
	}
	index.name = request.params.name;
	index.setName({
		'params':{
			'name':request.params.name
		}
	})
	response.render('index',data);
}
