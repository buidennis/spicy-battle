
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
  res.render('battle', {
     'exercises': [
       { 'exerciseTitle': 'Pushups',
         'exerciseName': 'Pushups',
         'repetitions': 'x10',
         'id': 'exercise1'
       },
       { 'exerciseTitle': 'Situps',
         'exerciseName': 'Situps',
         'repetitions': 'x15',
         'id': 'exercise2'
       },
       { 'exerciseTitle': 'Jumping Jacks',
         'exerciseName': 'Jumpingjacks',
         'repetitions': 'x30',
         'id': 'excercise3'
       },
       { 'exerciseTitle': 'Squats',
         'exerciseName': 'Squats',
         'repetitions': 'x20',
         'id': 'exercise4'
       }
     ]
   });
 };
