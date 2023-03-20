import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import apiTheMovie from "../services/fetch-trending-movie";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import { Wrapper } from "./movies.styled";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
;

//     useEffect(() => {
       
//    })

    const handleFormSubmit = (evt) => {

        evt.preventDefault();
         apiTheMovie.fetchSearchMovies(query)
            .then(newMovies => {
                if (newMovies.length === 0) {
                    setError("We don't have any reviews for this movie");
                } else {
                    setMovies(prevMovies => [...prevMovies, ...newMovies]);
                    // setMovies(newMovies);
                }
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false)
            })
        setError("");
    };   
    
    const handleInput = (evt) => {
    const nextParams = evt.target.value !== "" ? { query: evt.target.value } : {};
    setSearchParams(nextParams);
    }

    return (<Wrapper>
        <input type="text"
            value={query}
            onChange={handleInput} />
        <button type="submit" onClick={handleFormSubmit}>Search</button>
        <MoviesList movies={movies}  />
        {isLoading && <Loader />}
        {error && <p> {error}</p>}
    </Wrapper>
    )
};

export default Movies;

