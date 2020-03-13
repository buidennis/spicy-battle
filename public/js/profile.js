'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
    console.log("Javascript connected!");
    $.get('/index1', callbackFunc);
		$(".profile-button").click(saveButtonListener);
		$(".alt-profile-button").click(saveAltButtonListener);
}
function changeHeight( variable){
  console.log("Change height");
	$.get("/changeHeight/"+variable, callbackFunc1);
}
function changeWeight( variable){
  console.log("Change weight");
	$.get("/changeWeight/"+ variable, callbackFunc1);
}
function changeAge( variable){
  console.log("Change age");
	$.get("/changeAge/"+ variable, callbackFunc1);
}
function changeSex( variable){
  console.log("Change sex");
	$.get("/changeSex/"+ variable, callbackFunc1);
		    window.location.href = '/profile';
}

function changeHeight2( variable){
  console.log("Change height");
	$.get("/changeHeight2/"+variable, callbackFunc1);

}
function changeWeight2( variable){
  console.log("Change weight");
	$.get("/changeWeight2/"+ variable, callbackFunc1);

}
function changeAge2( variable){
  console.log("Change age");
	$.get("/changeAge2/"+ variable, callbackFunc1);
}
function changeSex2( variable){
  console.log("Change sex");
	$.get("/changeSex2/"+ variable, callbackFunc1);
  window.location.href = '/profileAlt';
}


function callbackFunc(request,response){
    $("#name").text(request.info.name);
		$("#age").html('<div>Age: <div style="color: #ff5100 ; display: inline-block">' + request.info.age +'</div> </div>');
		$("#sex").html('<div>Sex: <div style="color: #ff5100 ; display: inline-block">' + request.info.sex +'</div> </div>');
		$("#weight").html('<div>Weight: <div style="color: #ff5100 ; display: inline-block">' + request.info.weight +' kg</div> </div>');
		$("#height").html('<div>Height: <div style="color: #ff5100 ; display: inline-block">' + request.info.height +' cm</div> </div>');
}
function callbackFunc1(request,response){
}
function saveButtonListener(){
	ga("send", "event", "presses", "click");
}
function saveAltButtonListener(){
	ga("send", "event", "altpresses", "click");
}
