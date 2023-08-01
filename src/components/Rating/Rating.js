import React, {useContext, useState} from 'react';

import './Rating.css';
import {moviesService} from "../../services/moviesService";
import {MovieAppContext} from "../../layouts/MainLayout";

const Rating = ({ rating: initialRating = null, movieId, isVote, setIsVote}) => {
    const [rating, setRating] = useState(initialRating);
    const [tempRating, setTempRating] = useState(null);
    const {isDark} = useContext(MovieAppContext);
    const rate = (selectedRating) => {
        if(isVote) {
            return;
        }
        setRating(selectedRating);
        setTempRating(selectedRating);
        moviesService.rateMovie(movieId, {value: rating + 1});
        setIsVote(true);
    };

    const handleStarOver = (selectedRating) => {
        if(isVote) {
            return;
        }
        setTempRating(rating);
        setRating(selectedRating);
    };

    const handleStarOut = () => {
        if(isVote) {
            return;
        }
        setRating(tempRating);
    };

    const stars = [];

    for (let i = 0; i < 10; i++) {
        let className = 'star-rating__star';
        if (rating >= i && rating !== null) {
            className += ' is-selected';
        }

        stars.push(
            <label
                key={i}
                className={className}
                onClick={() => rate(i)}
                onMouseOver={() => handleStarOver(i)}
                onMouseOut={handleStarOut}
            >
                ★
            </label>
        );
    }

    return <div className="star-rating">{stars}</div>;
};

export default Rating;



