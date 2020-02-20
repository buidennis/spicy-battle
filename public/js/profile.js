'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
    console.log("Javascript connected!");
    $.get('/index1', callbackFunc);
}

function callbackFunc(request,response){
    $("#name").text(request.info.name);
    $("#age").text("Age: "+request.info.age);
    $("#sex").text("Sex: "+request.info.sex);
    $("#weight").text("Weight: "+request.info.weight);
    $("#height").text("Height: "+request.info.height);
}