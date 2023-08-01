import {useLoaderData} from "react-router-dom";

import {Carousel} from "../Carousel/Carousel";
import styles from './MoviesList.module.css';


const MoviesList = () => {
   const trendingMovies = useLoaderData().trendingMovies.data.results;
   const topRatedMovies = useLoaderData().topRatedMovies.data.results;
   const upcomingMovies = useLoaderData().upcomingMovies.data.results;

    return (
        <div className={styles.container}>
            <Carousel movies={upcomingMovies} title='Upcoming' translateX='100%' />
            <Carousel movies={trendingMovies} title='Trending Now' translateX='100%' />
            <Carousel movies={topRatedMovies} title='Top Rated All Time' translateX='100%' />
        </div>
    );
};

export {MoviesList};