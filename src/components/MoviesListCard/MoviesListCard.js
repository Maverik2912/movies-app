import {useEffect, useRef, useState} from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import styles from './MoviesListCard.module.css';
import { MoviesPrinter } from "../MoviesPrinter/MoviesPrinter";
import { MoviePagination } from "../MoviePagination/MoviePagination";
import { moviesService } from "../../services/moviesService";

const MoviesListCard = () => {
    const location = useLocation();
    let movies = useLoaderData().movies.data.results;
    const genreName = useLoaderData().genreName;
    const genreId = useLoaderData().genreId;
    const year = useLoaderData().year;
    const query = useLoaderData().query;

    const [page, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);
    const [moviesByPage, setMoviesByPage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    movies = movies.filter(movie => movie.poster_path);

    useEffect(() => {
        setPage(1);
    }, [location.pathname])

    useEffect(() => {
        fetchData(page);
    }, [location.pathname, page]);

    const fetchData = (pageNumber) => {
        setIsLoading(true);
        setIsLastPage(false);

        if (location.pathname.includes("genres")) {
            moviesService.getByGenreId(genreId, pageNumber).then(({data}) => {
                handlePagination(data);
            })
        } else if (location.pathname.includes("time")) {
            moviesService.getByTimeInterval(year, (+year + 9).toString(), pageNumber).then(({data}) => {
                handlePagination(data);
            })
        } else if (location.pathname.includes("query")) {
            moviesService.getByQuery(query, page).then(({data}) => {
               handlePagination(data);
            })
        }

        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePagination = (data) => {
            const movies = data.results.filter(movie => movie.poster_path);
            if(!movies.length) {
                setIsLastPage(true);
            }
            setMoviesByPage(movies);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {location.pathname.includes("genres")
                    ? `Genre ${genreName}`
                    : location.pathname.includes("query")
                        ? `Movies by query "${query}"`
                        : `Movies from ${year} to ${(+year + 9).toString()}`}
            </h1>
            <MoviesPrinter isLastPage={isLastPage} movies={page === 1 ? movies : moviesByPage} />
            <MoviePagination
                page={page}
                setPage={setPage}
                isLastPage={isLastPage}
                isLoading={isLoading}
            />
        </div>
    );
};

export { MoviesListCard };
