import {w500PosterUrl} from "../../constants/urls/urls";
import styles from './PosterPreview.module.css';
import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";
import {links} from "../../constants/links/links";

const PosterPreview = ({movie}) => {
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
    const {selectedValue, setSelectedValue} = useOutletContext();

    const hoverHandler = (e) => {
        setIsHover(true);
        e.target.classList.add(styles.active);

    }
    const blurHandler = (e) => {
        e.target.classList.remove(styles.active);
        setIsHover(false);
    }

    const clickHandler = (movieId) => {
        selectedValue && setSelectedValue('');
        navigate(`${links.MOVIES}/${movieId}`)
    }

    return (
        <>
            {movie.poster_path && <img
                onClick={() => clickHandler(movie.id)}
                onMouseOver={hoverHandler}
                onMouseOut={blurHandler}
                className={styles.poster}
                src={`${w500PosterUrl}${movie.poster_path}`}
                alt={movie.title}/>}
        </>
    );
};

export {PosterPreview};