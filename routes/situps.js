
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  // var name = req.params.name;
  // console.log("in exercise");
  // console.log("Exercise name is: " + name);
  // console.log("Database exercise is: " + data.exercises[0].exerciseName);
  // for(i = 0;  i < data.exercises.length; i++){
  //   if(name== data.exercises[i].exerciseName){
  //     var location='.exercise-container';
  //     var exerciseHTML = '<div style="text-align: center">'
  //     + '<h1 class="title_header">{{' + data.exercises[i].exerciseName +
  //     '}}</h1>' +'</div>'+ '<div class="exercise_video" style="margin: 0 auto;">'+
  //     '<video style="text-align: center;"width="200" height="300" autoplay loop muted>'
  //     + '<source src={{'+ data.exercises[i].video + '}} type="video/mp4">'
  //     +'</video>'+'</div>';
  //     $(location).html(exerciseHTML);
  //     //break??
  //   }
  //
  // }
  res.render('situps', data);
};
