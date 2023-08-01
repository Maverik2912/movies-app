import {moviesService} from "../../services/moviesService";
import {MoviesListCard} from "../../components";

const MoviesByQueryPage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

const MoviesByQueryPageLoader = async ({params}) => {
    try{
        const {query} = params;
        const movies = await moviesService.getByQuery(query, 1)
        return {movies, query}
    } catch(e) {
        console.log(e.message);
    }
}

export {MoviesByQueryPage, MoviesByQueryPageLoader};