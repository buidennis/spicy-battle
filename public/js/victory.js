'use strict';
var name;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");
    $.get('/index1', callbackFunc);
}

function callbackFunc(request, response){
    $.get('/victoryInfo/'+request.info.name, callbackFunc1);
		$("#calories-burnt-recap").text(request.info.calories_burnt_current);
		$("#experience-gained-recap").text(request.info.experienceGain);
		$("#level-recap").text("Level " + request.info.level);
		var xp = ((request.info.experience/request.info.experienceNextLevel)*100)+"%";
		$("#xp-recap").css("width", xp);
		$("#pushups-recap").html('<div><div style="color: darkorange; display: inline-block;">' + request.workout.PushUpsCurrent +'</div> Pushups</div>');
		$("#situps-recap").html('<div><div style="color: darkorange; display: inline-block">' + request.workout.SitUpsCurrent +'</div> Sit Ups</div>');
		$("#jumpingjacks-recap").html('<div><div style="color: darkorange; display: inline-block">' + request.workout.JumpingJacksCurrent +'</div> Jumping Jacks</div>');
		$("#squats-recap").html('<div><div style="color: darkorange; display: inline-block">' + request.workout.SquatsCurrent +'</div> Squats</div>');

}

function callbackFunc1(request, response){
    console.log(request);
}
