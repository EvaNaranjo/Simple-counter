import React from "react";
import propTypes from "prop-types";

const SecondCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="clock" className="seconds">
				<i className="far fa-clock"></i>
			</div>
			<div className="seconds">
				{parseInt((props.second % 1000000) / 100000)}
			</div>
			<div className="seconds">
				{parseInt((props.second % 100000) / 10000)}
			</div>
			<div className="seconds">
				{parseInt((props.second % 10000) / 1000)}
			</div>
			<div className="seconds">
				{parseInt((props.second % 1000) / 100)}
			</div>
			<div className="seconds">{parseInt((props.second % 100) / 10)}</div>
			<div className="seconds">{props.second % 10}</div>
		</div>
	);
};

SecondCounter.propTypes = {
	second: propTypes.number,
};

export default SecondCounter;
