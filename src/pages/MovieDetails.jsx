import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import apiTheMovie from "../services/fetch-trending-movie";
import BackLink from "components/BackLink/BackLink";
import Loader from "components/Loader/Loader";
import { Wrapper, TitleAndOther, Title, Owerview, Genres, Info, GenresList, GenresItem, InfoTitle, Image } from "./MovieDetails.styled";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/");
    

    useEffect(() => {
        setIsLoading(true);
        apiTheMovie.fetchMovieDetails(movieId)
            .then(data => {
            setMovieDetails(data);
        }).catch(error => {
        setError(error);
        setIsLoading(false);
      }).finally(() => {
        setIsLoading(false)
      })
    }, [movieId]);
     
    const fixedScore = (movieDetails.vote_average * 10).toFixed(0);

    return (<Wrapper>
        <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
        {!error && movieDetails ? <div>
            <Image src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="poster"  />
            <TitleAndOther>
        <Title>{movieDetails.original_title}({movieDetails.release_date ? movieDetails.release_date.slice(0, -6): ''})</Title>
        <p>User score: {fixedScore} %</p>
        <Owerview>Owerview</Owerview>
        <p>{movieDetails.overview}</p>
        <Genres>Genres</Genres>
        <GenresList>
            {movieDetails.genres &&
                movieDetails.genres.map(({ name, id }) => (
                      <GenresItem key={id}>{name}</GenresItem>
                    ))}
                </GenresList>
                </TitleAndOther>
             </div> : (<p>We don't have any information for this movie</p>
        )}
        {isLoading && <Loader />}
        <Info><InfoTitle> Additional information</InfoTitle>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </Info>
        <Outlet/>
    </Wrapper>)
};

export default MovieDetails;
