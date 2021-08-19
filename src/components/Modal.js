import React from "react";

export default function Modal({ title, charachters, open, children, onClose }) {
	if (!open) return null;

	return (
		<>
			<div className="OverlayStyles"></div>
			<div className="Modal">
				<button onClick={onClose}>Close Modal</button>
				{children}
				{title}
				{charachters}
			</div>
		</>
	);
}
