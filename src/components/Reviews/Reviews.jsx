import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiTheMovie from "../../services/fetch-trending-movie";
import Loader from "components/Loader/Loader";

const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setIsLoading(true);
        apiTheMovie.fetchMovieReviews(movieId)
            .then(data => {
            setReview(data);
        }).catch(error => {
        setError(error);
        setIsLoading(false);
      }).finally(() => {
        setIsLoading(false)
      })
  }, [movieId]);




    return <div>
       { !error && review.length > 0 ? (review.map(({ author, id, content }) => (
           <li key={id}>
               <h3>Author: {author} </h3>
               <p>{content}</p>
           </li>
       ))) : (<p>We don't have any reviews for this movie</p>
        )}
        {error && <p align="center">Sorry, something went wrong"</p>}
        {isLoading && <Loader />}
    </div>
};

export default Review;