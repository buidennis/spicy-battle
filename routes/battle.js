
/*
 * GET home page.
 */

// $ = jQuery;
// var maxHealth = 500;
// var curHealth = maxHealth;
//
// $('.exercise-button').click(function(){
//   curHealth=curHealth-10;
// })



/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  res.render('battle', data);
 };
