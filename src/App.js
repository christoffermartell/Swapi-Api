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

	const getEpisode = () => {};

	console.log("Movies - ", movies);
	return (
		<div className="App">
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				{movies.map((movies) => (
					<ul>
						{movies.title}
						<br />
					</ul>
				))}
			</Modal>
			{movies.map((movies) => (
				<ul className="Movies">
					<button
						key={movies.episode_id}
						className="infoButton"
						onClick={() => setIsOpen(true)}
					>
						Information
					</button>
					<br></br>
					{movies.title} <br /> Release date : {movies.release_date}
					<br />
					Episode : {movies.episode_id}
				</ul>
			))}
		</div>
	);
}

export default App;
