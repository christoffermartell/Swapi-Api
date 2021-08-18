import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
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
				<li
					style={{
						border: "2px solid black",
						fontWeight: "bold",
						fontSize: "25px",
						borderInline: "solid",
					}}
				>
					{movies.title} <br /> {movies.created}
				</li>
			))}
		</div>
	);
}

export default App;
