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
}

function callbackFunc1(request, response){
    console.log(request);
}