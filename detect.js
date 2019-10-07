'use strict';

// Detects which period is selected.

var attached = false;
var students = [];

window.onload = function() {
	document.getElementById("btn").addEventListener("click", selectedPeriod)
	document.getElementById("RANDOMIZE").addEventListener("click", randomPick);
}


let selectedPeriod = () => {
	
	// get period value
	let period = document.getElementById("periodSelect").value;
	
	let port = chrome.extension.connect({
		name: "Load Student Names"
	});

	port.postMessage(period);
	port.onMessage.addListener(function(msg) {
		console.log("message received");
		
		console.log(msg);
		
		students = msg;
		let displayStudents = msg.join(", ")
		//create the display
		
		document.getElementById('display').textContent = "Students: " + displayStudents;
		
	});

}

function randomPick(){
	
	if (students != []) {
		if(students[Math.floor(Math.random() * students.length)] != undefined){
			let selected = students[Math.floor(Math.random() * students.length)];
			document.getElementById("chosen").textContent = "Student Selected: " + selected;
		} else {
			document.getElementById("chosen").textContent = "No period selected or class list empty."
		}
	}
}
