import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import "./Style.css";
function App() {
	const [movies, setMovies] = useState([]);

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
			{movies.map((movies) => (
				<li className="Movies">
					{movies.title} <br /> {movies.release_date}
				</li>
			))}
		</div>
	);
}

export default App;
