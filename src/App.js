import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [people, setPeople] = useState([]);
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState([]);

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
			<Router>
				<Switch>
					<Route></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
