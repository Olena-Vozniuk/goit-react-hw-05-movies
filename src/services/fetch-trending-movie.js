import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `1633536a0456347d61753bdcd242ef29`;

 
const fetchTrending = () => axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);

const fetchSearchMovies = (query) => axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1`)
    .then(response => response.data.results);

const fetchMovieDetails = (id) => axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
    
const fetchMovieCredits = (id) => axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);    

const fetchMovieReviews = (id) => axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);

const apiTheMovie = {
    fetchTrending,
    fetchSearchMovies,
    fetchMovieDetails,
    fetchMovieCredits,
    fetchMovieReviews
};

export default apiTheMovie;