import {Link} from "react-router-dom";
import {useContext} from "react";

import {w500PosterUrl} from "../../constants/urls/urls";
import {dateFormater} from "../../utils/dateFormater";
import {links} from "../../constants/links/links";
import {MovieAppContext} from "../../layouts/MainLayout";
import styles from './MovieDetails.module.css';

const MovieDetails = ({movie}) => {
    const {isDark} = useContext(MovieAppContext);

    return (
        <div className={styles.flexContainer}>
            {movie.poster_path &&
                <div className={styles.posterContainer}>
                    <img className={styles.poster} src={`${w500PosterUrl}${movie.poster_path}`}
                         alt={movie.title}/>
                </div>}
            <div>
                <div className={styles.gridContainer}>
                    {movie.vote_average !== null && movie.vote_average !== undefined && <>
                        <h3>Ratings:</h3>
                        <p><b className={isDark ? styles.dark : styles.light}>{movie.vote_average.toFixed(1)}</b> ({movie.vote_count})</p>
                    </>}
                    {movie.release_date && <>
                        <h3>Release date:</h3>
                        <p>{dateFormater(movie.release_date)}</p>
                    </>}
                    {movie.tagline && <>
                        <h3>Tagline:</h3>
                        <p>{movie.tagline}</p>
                    </>}
                    {movie.genres.length ?
                        <>
                            <h3>Genre:</h3>
                            <div>
                                {movie.genres.map((genre, index) => {
                                    return (
                                        <Link className={`${styles.genre} ${isDark ? styles.dark : styles.light}`}
                                              key={genre.name} to={`${links.GENRES}/${genre.name}/${genre.id}`}>
                                            {genre.name}
                                            {index !== movie.genres.length - 1 && ','}
                                        </Link>
                                    );
                                })}
                            </div>
                        </> :
                        <></>
                    }
                    {movie.runtime !== null && movie.runtime !== undefined && <>
                        <h3>Runtime:</h3>
                        <p>{movie.runtime} min</p>
                    </>}
                    {movie.production_countries && <>
                        <h3>Country:</h3>
                        <div>
                            {movie.production_countries.map((country, index) => {
                                return <span key={country.name}>
                                    {index !== movie.production_countries.length - 1 ?
                                    `${country.name}, ` :
                                    country.name
                                    }
                                </span>
                            })}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};