import { useEffect, useState } from "react";
import apiTheMovie from '../services/fetch-trending-movie';
import TrendingList from "../components/trendingList/trendingList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        apiTheMovie.fetchTrending().then(movies => {
            setMovies(movies);
        }).catch(error => console.error(error));
    }, []);

 
    return (<main>
        <TrendingList movies= {movies} />
        </main>)
}

export default Home;