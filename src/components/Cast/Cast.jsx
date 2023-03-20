import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiTheMovie from "../../services/fetch-trending-movie";
import Loader from "components/Loader/Loader";
import { CastWrapper, Image, Item } from "./Cast.styled"

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setIsLoading(true);
        apiTheMovie.fetchMovieCredits(movieId)
            .then(data => {
            setCast(data);
        }).catch(error => {
        setError(error);
        setIsLoading(false);
      }).finally(() => {
        setIsLoading(false)
      })
    }, [movieId]);

    return <CastWrapper>
       { !error && cast.length > 0 ? (cast.map(({ name, id, character, profile_path }) => (
           <Item key={id}>
               <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="actor" />
               <p>{name}</p>
            <p>{character}</p>   
           </Item>
       ))) : (<p>We don't have any cast for this movie</p>
        )}
        {error && <p align="center">Sorry, something went wrong"</p>}
        {isLoading && <Loader />}
    </CastWrapper>
}

export default Cast;



