import {useContext, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import {moviesService} from "../../../services/moviesService";
import {FoundedMovie} from "../FoundedMovie/FoundedMovie";
import {MovieAppContext} from "../../../layouts/MainLayout";
import styles from "./SearchInput.module.css";
import {links} from "../../../constants/links/links";

const SearchInput = () => {
    const {selectedValue, setSelectedValue, isDark} = useContext(MovieAppContext);

    const [query, setQuery] = useState('');
    const [fullMovieList, setFullMovieList] = useState([]);
    const [shortMoviesList, setShortMoviesList] = useState([]);

    const inputRef = useRef();
    const searchListRef = useRef();
    
    window.addEventListener('click', (e) => {
        if (e.target === inputRef.current || e.target === searchListRef.current) {
            return;
        }
        setQuery('');
    })

    useEffect(() => {
        if (query) {
            moviesService.getByQuery(query, 1)
                .then(({data}) => {
                    const movies = data.results;
                    const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
                    setFullMovieList(sortedMovies);
                    setShortMoviesList(sortedMovies.slice(0, 5));
                })
        }
    }, [query]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.inputContainer}>
                <input
                    ref={inputRef}
                    className={`${styles.input} ${isDark ? styles.dark : styles.light}`}
                    type="text"
                    placeholder='Search your interesting...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                {query &&
                    <ul ref={searchListRef} className={`${styles.searchList} ${isDark ? styles.dark : styles.light}`}>
                        {fullMovieList.length ? shortMoviesList.map(
                                movie => <FoundedMovie key={movie.id} movie={movie} selectedValue={selectedValue}
                                                       setSelectedValue={setSelectedValue}/>)
                            : <li className={styles.noMovies}>No movies were found for your search</li>
                        }
                        {fullMovieList.length !== shortMoviesList.length &&
                            <Link className={styles.seeAll} to={`${links.QUERY}/${query}`}>See all</Link>
                        }
                    </ul>
                }

            </div>
        </div>
    );
};

export {SearchInput};