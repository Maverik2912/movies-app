import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {
    ErrorPage,
    MovieInfoPage,
    MovieInfoPageLoader, MoviesByQueryPage, MoviesByQueryPageLoader,
    MoviesListCardPage, MoviesListCardPageLoader,
    MoviesListPage,
    MoviesListPageLoader, MoviesListTimePage, MoviesListTimePageLoader
} from "../pages/";
import {links} from "../constants/links/links";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={links.MOVIES} />,
            },
            {
                path: links.MOVIES,
                element: <MoviesListPage />,
                loader: MoviesListPageLoader
            },
            {
                path: `${links.MOVIES}/:movieId`,
                element: <MovieInfoPage />,
                loader: MovieInfoPageLoader
            },
            {
                path: `${links.GENRES}/:genreName/:genreId`,
                element: <MoviesListCardPage />,
                loader: MoviesListCardPageLoader
            },
            {
                path: `${links.TIME}/:year`,
                element: <MoviesListTimePage />,
                loader: MoviesListTimePageLoader
            },
            {
                path: `${links.QUERY}/:query`,
                element: <MoviesByQueryPage />,
                loader: MoviesByQueryPageLoader
            }
        ]
    }
])