import React from "react";
import SecondCounter from "./component/SecondCounter.jsx";
//create your first component

const Home = (props) => {
	return (
		<div>
			<SecondCounter second={props.second} />
		</div>
	);
};

export default Home;
