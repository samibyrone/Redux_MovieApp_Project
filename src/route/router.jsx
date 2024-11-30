import Layout from "../layout/Layout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import PopularMovies from "../components/PopularMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import TopRated from "../components/TopRated";
import NowPlaying from "../components/NowPlaying";

const ROUTES = [
    {
    Path: '/signup',
    element: <SignUp/>
    },
    {
        Path: '/',
        element: <Login/>
    },
    {
        path: '/movie',
        element: <Layout/>,
        children: [
            {
                path: "/movie/popular",
                element:<PopularMovies/>
            },
            {
                path: "/movie/upcoming",
                element:<UpcomingMovies/>
            },
            {
                path: "/movie/toprated",
                element:<TopRated/>
            },
            {
                path: "/movie/nowplaying",
                element:<NowPlaying/>
            }
        ]
    }

]

export default ROUTES;