import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


function Home() {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const navigate = useNavigate();
    const [allMovies, setAllMovies] = React.useState([]);

    const getMovies = async() => {
        try {
            let res = await fetch (`http://localhost:8080/movies`);
            let response = await res.json();
            setAllMovies(response);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login');
        }
        else{
            getMovies();
        }
    }, [isLoggedIn]);
    
  return (
    <div>
        {
            allMovies?.map((movie, index)=>{
                return <div key={index}>
                    <img width={200} src={movie.poster_path} alt="" />
                    <h3>{movie.title}</h3>
                    <Link to={`/movie/${movie.id}`}>more details</Link>
                </div>
            }
            )
        }
    </div>
  )
}

export default Home