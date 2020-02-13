
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  console.log("in home");
  console.log(data);
  res.render('index', data);
};
