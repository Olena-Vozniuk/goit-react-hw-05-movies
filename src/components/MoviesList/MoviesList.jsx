import { Link, useLocation } from "react-router-dom";
import { List, Item } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <List>
            {movies &&
                movies.map(({ title, id, release_date, poster_path }) => (
                    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" width={100}/>
                        <Item>{title} ({release_date.slice(0, -6)})</Item>
                        </Link>
                    ))}
        </List>
        );
   
};

export default MoviesList;