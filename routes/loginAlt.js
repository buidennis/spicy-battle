var data = require('../data.json');
var index = require('./index.js');

exports.view = function(req, res){
    res.render('loginAlt');
};

exports.login = function(request, response){
    var email = request.query.email;
    var password = request.query.password;

    var found = false;
	  for (var i = 0; i < data.members.length; i++) {

  		if(request.query.email.toLowerCase() === data.members[i].email.toLowerCase()){
  			found = true;
        console.log("found email");
        if(request.query.password === data.members[i].info.password){
          console.log("correct password");
          response.render('index', data);
        }
        else{
          console.log("wrong password");
          response.render('loginAlt', data);
        }

  		}

	  }
  if( email == "" || password == ""){
          console.log("no password");
          response.render('loginAlt', data);
  }
  else{
	if(found == false){
		var newUser = {
				"email": request.query.email,
            	"info": {
					"shake": 0,
					"password": password,
					"name": email.substring(0, email.lastIndexOf("@")),
					"weight":0,
					"height":0,
					"age": 0,
					"sex": "",
					"experience": 0,
					"calories_burnt_total":0,
					"calories_burnt_current":0,
          "c_hp": 100,
          "m_hp": 100,
          "level": 1,
          "experienceNextLevel": 10,
          "experienceGain": 15,
						},
				"workout":{
					"SitUpsTotal":0,
					"SitUpsCurrent":0,
					"PushUpsTotal":0,
					"PushUpsCurrent":0,
					"SquatsCurrent":0,
					"SquatsTotal":0,
					"JumpingJacksTotal":0,
					"JumpingJacksCurrent":0
				},
		}
    newUser.info.password = password;
		data.members.push(newUser);
		console.log(newUser)
    index.name = email.substring(0, email.lastIndexOf("@"));
  	index.setName({
  		'params':{
  			'name':email.substring(0, email.lastIndexOf("@"))
  		}
  	});
    console.log(data.members);
  }
  	response.render('index',data);

  console.log("Email is " + email);
	console.log("password is "+password);
	console.log("DB Email is "+ data.members[0].email);
  	}
}
