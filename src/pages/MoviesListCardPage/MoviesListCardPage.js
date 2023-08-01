import {MoviesListCard} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListCardPage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

export const MoviesListCardPageLoader = async ({params}) => {
    try{
        const {genreName, genreId} = params;
        const movies = await moviesService.getByGenreId(genreId, 1);
        return {movies, genreName, genreId}
    } catch (e) {
        console.log(e.message);
    }
}

export {MoviesListCardPage};