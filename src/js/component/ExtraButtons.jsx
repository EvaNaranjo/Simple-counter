import React from "react";
// import Button from "react-bootstrap/Button";
// import propTypes from "prop-types";

const ExtraButtons = () => {
	return (
		<div className="extraButtons">
			<button type="button" className="btn btn-primary countdown">
				Countdown
			</button>

			<div
				className="btn-group"
				role="group"
				aria-label="Basic checkbox toggle button group">
				<button type="button" className="btn btn-danger stopButton">
					Stop
				</button>
				<button type="button" className="btn btn-success resetButton">
					Reset
				</button>
				<button type="button" className="btn btn-info resumeButton">
					Resume
				</button>
			</div>
			<button type="button" className="btn btn-danger alert">
				Alert
			</button>
		</div>
	);
};

export default ExtraButtons;
