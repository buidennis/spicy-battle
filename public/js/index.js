'use strict';

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

function callbackFunc(request,response){
    $("#name").text(request.info.name);
}

function increaseExperience(){
    $.get('/modifyXP', callbackExperienceFunc);
}

function callbackExperienceFunc(request, response){
    console.log(request);
    location.href = '/index';
}