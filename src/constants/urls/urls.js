const baseMoviesURL = 'https://api.themoviedb.org/3';

const originalPosterURL = 'https://image.tmdb.org/t/p/original';
const w500PosterUrl = 'https://image.tmdb.org/t/p/w500';

const genresList =  'genre/movie/list';
const moviesList = 'discover/movie';
const searchMovie =  'search/movie'
const movieById = 'movie';
const upcoming = 'movie/upcoming';

const urls = {
    genresList, moviesList, searchMovie, movieById, upcoming
}

export {baseMoviesURL, originalPosterURL, w500PosterUrl, urls}