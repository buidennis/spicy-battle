var data = require('../data.json');
var index = require('./index.js');

exports.view = function(req, res){
    res.render('login');
};

exports.login = function(request, response){
    var email = request.query.email;
    var password = request.query.password;

    var found = false;
	for (var i = 0; i < data.members.length; i++) {

		if(request.query.email.toLowerCase() === data.members[i].email.toLowerCase()){
			found = true
			break;
		}
		console.log(request.query.email.toLowerCase());
		console.log(data.members[i].email);
	}

	if(found == false){
		var newUser = {
				"email": request.query.email,
            	"info": {
					"password": password,
					"name": email.substring(0, email.lastIndexOf("@")),
					"weight":0,
					"height":0,
					"age": 0,
					"sex": "Male",
					"experience": 0,
					"calories_burnt":0,
          "c_hp": 100,
          "m_hp": 100,
          "level": 1,
          "experienceNextLevel": 10,
          "experienceGain": 15,
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
	index.name = email.substring(0, email.lastIndexOf("@"));
	console.log(index.name);
	index.setName({
		'params':{
			'name':email.substring(0, email.lastIndexOf("@"))
		}
	});
	response.render('index',data);

	// if(data.members.email == email){
	// if(data.members.info.password == password){
	// }
	// } else {
	// response.render('login');
	// }
  	console.log("Email is " + email);
	console.log("password is "+password);
	console.log("DB Email is "+ data.members[0].email);
	// console.log("DB password is "+ data.members.)
}
