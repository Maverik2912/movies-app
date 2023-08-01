import {apiMoviesService} from "./apiServices/apiMoviesService";
import {urls} from "../constants/urls/urls";

export const moviesService = {
    getMovies: () => apiMoviesService.get(urls.moviesList, {params: {sort_by: 'popularity.desc'}}),
    getGenres: () => apiMoviesService.get(urls.genresList),
    getBestRating: () => apiMoviesService.get(urls.moviesList, {params: {sort_by: "vote_average.desc", 'vote_count.gte': 10000}}),
    getByQuery: (query, page) => apiMoviesService.get(urls.searchMovie, {params: {query, page}}),
    getById: (id) => apiMoviesService.get(`${urls.movieById}/${id}`),
    getSimilarById: (id) => apiMoviesService.get(`${urls.movieById}/${id}/similar`),
    getVideoById: (id) => apiMoviesService.get(`${urls.movieById}/${id}/videos`),
    getByGenreId: (genreId, page) => apiMoviesService.get(urls.moviesList, {params: {sort_by: 'popularity.desc', with_genres: genreId, page}}),
    getByTimeInterval: (from, to, page) => apiMoviesService.get(urls.moviesList, {params: {'primary_release_date.gte': from, 'primary_release_date.lte': to, sort_by: 'popularity.desc', page}}),
    rateMovie: (id, body) => apiMoviesService.post(`${urls.movieById}/${id}/rating`, JSON.stringify(body), {headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }}),
    getUpcoming: () => apiMoviesService.get(urls.upcoming)
}