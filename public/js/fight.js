'use strict';
var health = '100%'

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log("Health is ");
  updateHealth();
}

function updateHealth(){
  $("#monster_hp").css("width", health);
}

function dealDamagePushUps(){
  console.log("Dealing damage");
  $.get("/dealDamage/"+"PushUps", callbackFunc);
}

function dealDamageSitUps(){
  console.log("Dealing damage");
  $.get("/dealDamage/"+"SitUps", callbackFunc);
}

function dealDamageSquats(){
  console.log("Dealing damage");
  $.get("/dealDamage/"+"Squats", callbackFunc);
}

function dealDamageJumpingJacks(){
  console.log("Dealing damage");
  $.get("/dealDamage/"+"JumpingJacks", callbackFunc);
}

function callbackFunc(request, response){
  console.log('damage dealt');
  health = request.percent+"%";

	// if(health <= '0%' && request.redirect){
  //   $("#monster_hp").css("width", health);
  // }
  if(health !== '100%' && request.redirect){
    $("#monster_hp").css("width", health);
  }
}
