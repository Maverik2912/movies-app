import {useLoaderData} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import {Carousel} from '../Carousel/Carousel';
import {Trailer} from "../Trailer/Trailer";
import {trailerUrl} from "../../constants/trailerUrl";
import {MovieDetails} from "../MovieDetails/MovieDetails";
import Rating from "../Rating/Rating";
import {MovieAppContext} from "../../layouts/MainLayout";
import styles from './MovieInfo.module.css';

const MovieInfo = () => {
    let movie = useLoaderData().movie.data;
    const similarMovies = useLoaderData().similarMovies.data.results;
    const videos = useLoaderData().video.data.results;
    const trailer = videos?.filter(video => video.name === 'Official Trailer');
    const {isDark} = useContext(MovieAppContext);
    const [isVote, setIsVote] = useState(false);
    const [votes, setVotes] = useState(movie.vote_count || 0);

    useEffect(() => {
        if(isVote) {
            setVotes(prev => ++prev);
        }
    }, [isVote]);

    return (
        <>
            <div className={styles.mainContainer}>
                <h1 className={styles.title}>{movie.title}</h1>
              <MovieDetails movie={movie} />
                {movie.overview &&
                    <div className={styles.about}>
                        <h2 className={styles.subtitle}>About movie "{movie.title}"</h2>
                        <div className={styles.dscr}>{movie.overview}</div>
                    </div>
                }
                {trailer.length !== 0 && <Trailer src={`${trailerUrl}${trailer[0].key}`} />}
                <div className={styles.vote_rating}>
                    <h3>{isVote ? 'Thanks for your vote!' : 'Rate the movie:'}</h3>
                    <div className={styles.ratingContainer}>
                        <Rating isVote={isVote} setIsVote={setIsVote} movieId={movie.id} rating={movie.vote_average ? Math.floor(+movie.vote_average - 1) : 0} />
                        {movie.vote_average !== null && movie.vote_average !== undefined &&
                            <p><b className={`${styles.rating} ${isDark && styles.dark}`}>{movie.vote_average.toFixed(1)}</b> ({votes})</p>
                        }
                    </div>
                </div>
            </div>
            {similarMovies.length ?
                <div className={styles.similar}>
                    <Carousel movies={similarMovies} title='Similar movies' translateX='88%'/>
                </div>
                : <></>
            }
        </>
    );
};

export {MovieInfo};