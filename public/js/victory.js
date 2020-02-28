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
		$("#pushups-recap").text("Push Ups: " + request.workout.PushUpsCurrent);
		$("#situps-recap").text("Sit Ups: " +request.workout.SitUpsCurrent);
		$("#jumpingjacks-recap").text("Jumping Jacks: " +request.workout.JumpingJacksCurrent);
		$("#squats-recap").text("Squats: " +request.workout.SquatsCurrent);

}

function callbackFunc1(request, response){
    console.log(request);
}
