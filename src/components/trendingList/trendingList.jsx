import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Wrapper, Item, List } from "./trendingList.styled";


const TrendingList = ({ movies }) => {
    const location = useLocation();

    return (<Wrapper>
        <h2>Trending today</h2>
        <List>
            {movies.map(({ title, id, release_date, poster_path })=> {
                return (
                    <Link key={id} to={`/movies/${id}`} state={{from: location}}>
                        <Item>
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" width="140" />
                            <p>{title} ({release_date.slice(0, -6)})</p>
                        </Item>
                    </Link>
                )
            })}
        </List>
    </Wrapper>);
   
};

export default TrendingList;


TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    })
  ),
};