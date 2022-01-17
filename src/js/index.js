//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// Importing the Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/SecondCounter.jsx";
import ExtraButtons from "./component/ExtraButtons.jsx";

//render your react application
var second = 0;
var timeIncrement = 1;
var alertClicked = false;

function render() {
	ReactDOM.render(
		<div>
			<SecondCounter second={second} />
			<ExtraButtons />
		</div>,
		document.querySelector("#app")
	);
}

window.addEventListener("load", () => {
	render();
	//Create an option to countdown from a given number
	document.querySelector(".countdown").addEventListener("click", (event) => {
		second = parseInt(prompt("Insert a number to countdown"));
		timeIncrement = -1;
	});

	//Create stop functionality
	document.querySelector(".stopButton").addEventListener("click", () => {
		timeIncrement = 0;
	});
	//Create reset functionality
	document.querySelector(".resetButton").addEventListener("click", () => {
		second = 0;
		timeIncrement = 1;
		render();
	});

	//Create resume functionality
	document.querySelector(".resumeButton").addEventListener("click", () => {
		timeIncrement = 1;
	});

	//Create an alert when the user reaches a specified time
	document.querySelector(".alert").addEventListener("click", () => {
		second = parseInt(prompt("set seconds to alert you"));
		timeIncrement = -1;
		alertClicked = true;
	});

	setInterval(() => {
		//console.log(second);
		second += timeIncrement;
		render();
		if (second == 0 && alertClicked) {
			alert("Time finish");
			alertClicked = false;
			timeIncrement = 1;
		}
	}, 1000);
});
//ReactDOM.render(<Home />, document.querySelector("#app"));
