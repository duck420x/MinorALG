"use strict()";

let clicked = 0;

let pin = document.getElementById("pin");
let submit = document.getElementById("submit");

pin.addEventListener("click", buttonClick);
submit.addEventListener("click", buttonClick);

function buttonClick() {
	if (clicked <= 4) {
		clicked++;
		console.log(clicked);
	} else {
		console.error("u got in else loop why?");
	}
}
console.log("loaded");
