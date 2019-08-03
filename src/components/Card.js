import React from "react";

const Card = ({ username, name, email }) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${username}?200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
export default Card;