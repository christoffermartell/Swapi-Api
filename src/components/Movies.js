import React from "react";

export default function Movies({ title, dateOfRealease, id }) {
	return (
		<div>
			{title}
			{dateOfRealease}
		</div>
	);
}
