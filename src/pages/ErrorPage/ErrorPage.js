import {Outlet, useRouteError} from "react-router-dom";
import {Header, SideBar} from "../../components";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <SideBar />
            <Header />
            <Outlet />
        </>
    );
};

export {ErrorPage};







