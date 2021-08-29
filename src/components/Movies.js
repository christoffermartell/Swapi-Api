import React from 'react';

function Movies ({movies,starWarsMoviesInformation}){
 
	const movieInformationHandler = () =>{
    const movieInformation = movies;
    starWarsMoviesInformation(movieInformation)
}


    return(
        <div  onClick={movieInformationHandler}>
          <div className="MovieDiv"> {movies.title} : {movies.release_date}</div>
        </div>
    )

}
    
 
export default Movies;