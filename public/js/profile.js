'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
    console.log("Javascript connected!");
    $.get('/index1', callbackFunc);
}
function changeHeight( variable){
  console.log("Change height");
	$.get("/changeHeight/", callbackFunc1);
}
function changeWeight( variable){
  console.log("Change weight");
	$.get("/changeWeight/", callbackFunc1);
}
function changeAge( variable){
  console.log("Change age");
	$.get("/changeAge/", callbackFunc1);
}
function changeSex( variable){
  console.log("Change sex");
	$.get("/changeSex/", callbackFunc1);
		    window.location.href = '/profile';
}


function callbackFunc(request,response){
    $("#name").text(request.info.name);
    $("#age").text("Age: "+request.info.age);
    $("#sex").text("Sex: "+request.info.sex);
    $("#weight").text("Weight: "+request.info.weight);
    $("#height").text("Height: "+request.info.height);
}
function callbackFunc1(request,response){
}
