import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { List, Item } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <List>
            {movies &&
                movies.map(({ title, id, release_date, poster_path }) => (
                    <Link key={nanoid()} to={`/movies/${id}`} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" width={100}/>
                        <Item>{title} ({release_date.slice(0, -6)})</Item>
                        </Link>
                    ))}
        </List>
        );
   
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    })
  ),
};