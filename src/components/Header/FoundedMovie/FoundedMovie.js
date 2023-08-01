import styles from './FoundedMovie.module.css';
import {useNavigate, useOutletContext} from "react-router-dom";
import {useContext} from "react";
import {MovieAppContext} from "../../../layouts/MainLayout";

const FoundedMovie = ({movie, selectedValue, setSelectedValue}) => {
    const {isDark} = useContext(MovieAppContext);
    const mark = movie.vote_average.toFixed(1);

    const navigate = useNavigate();
    const handleClick = (id) => {
        selectedValue && setSelectedValue('');
        navigate(`/movies/${id}`);
    }
    return (
        <li onClick={() => handleClick(movie.id)} className={`${styles.movieItem} ${isDark ? styles.dark : styles.light}`}>
            {movie.title} <span
            className={`${isDark ? styles.dark : styles.light} ${mark >= 7 ? styles.green : mark < 7 && mark > 5 ? styles.gray : styles.red}`}>{mark}</span>
        </li>
    );
};

export {FoundedMovie};