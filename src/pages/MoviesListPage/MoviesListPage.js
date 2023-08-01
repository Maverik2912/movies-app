import {MoviesList} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListPage = () => {
    return (
        <div>
            <MoviesList />
        </div>
    );
};

const MoviesListPageLoader = async () => {
   try{
       const trendingMovies = await moviesService.getMovies();
       const topRatedMovies = await moviesService.getBestRating();
       const upcomingMovies = await moviesService.getUpcoming();

       return {
           trendingMovies, topRatedMovies, upcomingMovies
       }
   } catch (e) {
       console.log(e.message);
   }
}

export {MoviesListPage, MoviesListPageLoader};