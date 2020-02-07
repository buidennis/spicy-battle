
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


exports.view = function(req, res){
  console.log("in battle");
    res.render('battle');
};
