import {MoviesListCard} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListTimePage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

const MoviesListTimePageLoader = async ({params}) => {
   try{
       const {year} = params;
       const movies = await moviesService.getByTimeInterval(year, (+year + 9).toString(), 1);
       return {year, movies}
   } catch(e) {
       console.log(e.message);
   }
}

export {MoviesListTimePage, MoviesListTimePageLoader};