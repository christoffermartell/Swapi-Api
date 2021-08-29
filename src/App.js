import React,{useState,useEffect} from 'react';
import Movies from './components/Movies'

import MovieInfo from './components/movieInfo.js';

function App(){
   const [starWarsMovies, setStarWarsMovie] = useState([]);
   const [starWarsData, setstarWarsData] = useState({});
   const [loading, setLoading] = useState(true);
   const [view, setView] = useState('');
    const Url = 'https://swapi.dev/api/films/'
    
    useEffect(() =>{
        async function fetchMovies(){
            let res = await fetch(Url)
            let data = await res.json();
            setStarWarsMovie(data.results);
            setLoading(false)
        }
        fetchMovies();
    },[]);


    const starWarsMoviesInformation = (movieInformation) => {
        setstarWarsData(movieInformation)
        setView('movieInfo')
    }

switch (view){
    case 'movieInfo':
        return(
            <div>
            <MovieInfo setView={setView} starWarsData={starWarsData} />
            </div> 
        )
        default:
            return(
                <div className="Movies">
                    <div>{loading ? <h1>Loading....</h1> :(<div>
                        <h1 className="starWarsTitle">Swapi Api</h1>
                    
                       {starWarsMovies.map((movies,i) =>{
                           
                           return <Movies key={i} movies = {movies} starWarsMoviesInformation={starWarsMoviesInformation} />
                       })}
                    </div>
                    ) }
                </div>   
                </div>
            )}
}
export default App;