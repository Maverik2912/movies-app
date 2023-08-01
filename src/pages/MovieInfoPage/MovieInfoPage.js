import {moviesService} from "../../services/moviesService";
import {MovieInfo} from "../../components";


const MovieInfoPage = () => {

    return (
        <div>
            <MovieInfo />
        </div>
    );
};

export const MovieInfoPageLoader = async ({params}) => {
    try{
        const {movieId} = params;
        const similarMovies = await moviesService.getSimilarById(movieId);
        const movie = await moviesService.getById(movieId);
        const video = await moviesService.getVideoById(movieId);
        return {movie, similarMovies, video};
    } catch(e) {
        console.log(e.message);
    }
}

export {MovieInfoPage};