
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

exports.view = function(req, res){
  res.render('battle', {
     'exercises': [
       { 'exerciseTitle': 'Pushups',
         'exerciseName': 'Pushups',
         'repetitions:': '10',
         'calories:': '25',
         'video': '/videos/pushups.mp4',
         'id': 'exercise1'
       },
       { 'exerciseTitle': 'Situps',
         'exerciseName': 'Situps',
         'repetitions:': '15',
         'calories:': '20',
         'video': '/videos/situps.mp4',
         'id': 'exercise2'
       },
       { 'exerciseTitle': 'Jumping Jacks',
         'exerciseName': 'Jumpingjacks',
         'repetitions:': '30',
         'calories:': '10',
         'video': '/videos/jumpingjacks.mp4',
         'id': 'excercise3'
       },
       { 'exerciseTitle': 'Squats',
         'exerciseName': 'Squats',
         'repetitions:': '20',
         'calories:': '15',
         'video': '/videos/squats.mp4',
         'id': 'exercise4'
       }
     ]
   });
 };
