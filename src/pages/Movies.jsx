import { useState, useEffect } from "react";
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

    useEffect(() => {
        apiTheMovie.fetchSearchMovies(query)
            .then(newMovies => {
                if (query !== '' && newMovies.length === 0) {
                    setError("We don't have any reviews for this movie");
                    setMovies();
                }
                else {
                    setMovies(prevMovies => [...prevMovies, ...newMovies]);
                }    
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false)
            })
        setError("");
    }, [query]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;
       
        if (query.trim() === '') return setSearchParams({});
        setSearchParams({ query });
        
    };   
    
    return (<Wrapper>
        <form onSubmit={handleFormSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies}  />
        {isLoading && <Loader />}
        {error && <p> {error}</p>}
    </Wrapper>
    )
};

export default Movies;

