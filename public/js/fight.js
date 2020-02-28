'use strict';
var health;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $.get('/health', callbackFunc1);
}


//Updates the hp bar
function updateHealth(){
  $("#monster_hp").css("width", health);
	  console.log("Health Changed");
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

function dealDamagePushUps2(){
  console.log("Dealing damage");
  $.get("/dealDamage2/"+"PushUps", callbackFunc2);
}

function dealDamageSitUps2(){
  console.log("Dealing damage");
  $.get("/dealDamage2/"+"SitUps", callbackFunc2);
}

function dealDamageSquats2(){
  console.log("Dealing damage");
  $.get("/dealDamage2/"+"Squats", callbackFunc2);
}

function dealDamageJumpingJacks2(){
  console.log("Dealing damage");
  $.get("/dealDamage2/"+"JumpingJacks", callbackFunc2);
}

function callbackFunc(request, response){
  console.log('damage dealt');
  health = request.percent+"%";
	if(request.victory){
    health = "100%";
		window.location.href = '/victory';
	}
  else {
    window.location.href = '/battle';
    $("#monster_hp").css("width", health);
  }
  

}
function callbackFunc1(request, response){
  health = request.health;
  console.log("Health is "+health);
  updateHealth();
}

function callbackFunc2(request,response){
  console.log('damage dealt');
  health = request.percent+"%";
	if($.get("/health") <= 0 && request.redirect){
		window.location.href = '/victory';
	}
  if(health !== '100%' && request.redirect){
    window.location.href = '/battle';
    $("#monster_hp").css("width", health);
  }
}
