"use strict()";

let clicked = 0;

let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");
let pin4 = document.getElementById("pin4");
let pin5 = document.getElementById("pin5");
let pin6 = document.getElementById("pin6");
let pin7 = document.getElementById("pin7");
let pin8 = document.getElementById("pin8");
let pin9 = document.getElementById("pin9");
let pin10 = document.getElementById("pin10");
let submit = document.getElementById("submit");

pin1.addEventListener("click", pinClick);
pin2.addEventListener("click", pinClick);
pin3.addEventListener("click", pinClick);
pin4.addEventListener("click", pinClick);
pin5.addEventListener("click", pinClick);
pin6.addEventListener("click", pinClick);
pin7.addEventListener("click", pinClick);
pin8.addEventListener("click", pinClick);
pin9.addEventListener("click", pinClick);
pin10.addEventListener("click", pinClick);
submit.addEventListener("click", submitClick);

function pinClick() {
	if (clicked < 4) {
		clicked++;
		console.log(clicked);
	}
}
function submitClick() {
	if (clicked == 4) {
        window.location.replace("./index.html");
	} else {
		console.error("not enough clicks");
	}
}
