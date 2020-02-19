var data = require("../data.json");

exports.SignIn = function(request, response) {  
	// Your code goes here
	var email = request.query.email;
	var password = request.query.password;
	
	response.render('index', data);

	console.log("Successfully logged in");
}