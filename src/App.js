import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Modal from "./components/Modal";
import "./Style.css";
function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const moviesUrl = "https://swapi.dev/api/films/";

	useEffect(() => {
		async function fetchMovies() {
			let res = await fetch(moviesUrl);
			let data = await res.json();
			setMovies(data.results);
		}

		fetchMovies();
	}, []);

	console.log("Movies - ", movies);
	return (
		<div className="App">
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				hello world
			</Modal>
			{movies.map((movies) => (
				<ul className="Movies">
					<button className="infoButton" onClick={() => setIsOpen(true)}>
						Information
					</button>
					<br></br>
					{movies.title} <br /> {movies.release_date}
				</ul>
			))}
		</div>
	);
}

export default App;
