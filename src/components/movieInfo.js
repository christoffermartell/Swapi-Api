import React,{useState,useEffect} from 'react';
import "../Style.css"

const MovieInfo = ({setView, starWarsData}) =>{
    const [loading, setLoading] = useState(true);
    const [charList,setCharList]= useState([])
    const characterApi=starWarsData.characters;
   
    const backHandler = () => {
        setView('')
    }

    useEffect(() =>{
        async function fetchpeople(){
            const char = await Promise.all(characterApi.map(url => fetch(url).then(char => char.json()))
            );
            
            setCharList(char)
            setLoading(false)
        }
        fetchpeople();
    });

    return(
        <div>{loading ? <h1>Loading....</h1> :(
    <div><h1 className="InfoTitle">  {starWarsData.title} </h1> 
    
        <div className="Characters">
            <div><br></br><button onClick={backHandler}>Close</button>
                <h3>Characters</h3>
            {charList.sort((a,b)=>{ 
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
                 return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;})
                .map((people,i)=>{
                return <div key={i}>{people.name}</div>
            })}
        </div>
    </div>
    </div>
        )}
    </div>)

}



export default MovieInfo;