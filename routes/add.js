var data = require("../data.json");

exports.SignIn = function(request, response) {
	// Your code goes here
	var email = request.query.email;
	var password = request.query.password;

	// if(data.members.email == email){
		// if(data.members.info.password == password){
		response.render('index', data);
		// }
	// } else {
		// response.render('login');
	// }
  	console.log("Email is " + email);
	console.log("password is "+password);
	console.log("DB Email is "+ data.members[0].email);
	// console.log("DB password is "+ data.members.)

	console.log("Successfully logged in");
}
