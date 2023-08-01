import {useContext} from "react";

import styles from './MoviesPrinter.module.css';
import {genId} from "../../utils/genId";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieAppContext} from "../../layouts/MainLayout";

const MoviesPrinter = ({movies, isLastPage}) => {
    const {isDark} = useContext(MovieAppContext);
    movies = movies.filter(movie => movie.poster_path);

    return (
        <div className={!isLastPage ? styles.gridContainer : ''}>
            {isLastPage ? <h2 className={styles.notFound}>No movies were found for your search </h2>
            :
                movies.map(movie => {
                        return (
                            <div key={genId(4)}>
                                <PosterPreview key={movie.id} movie={movie}/>
                                <h2 key={genId(4)} className={`${styles.movieTitle} ${isDark ? styles.dark : styles.light}`}>{movie.title}</h2>
                            </div>
                        )
                    })
            }
        </div>
    );
};

export {MoviesPrinter};