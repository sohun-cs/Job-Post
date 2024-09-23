import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import AllPages from "../pages/all-pages/AllPages";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddJob from "../pages/add-job/AddJob";
import MyPostedJob from "../pages/posted-jobs/MyPostedJob";
import BidRequest from "../pages/bid-request/BidRequest";
import MyBids from "../pages/my-bids/MyBids";
import PrivateRoutes from "./PrivateRoutes";
import JobDetails from "../pages/job-details/JobDetails";
import ErrorPage from "../pages/authentication/ErrorPage";
import UpdateJob from "../pages/update-job/UpdateJob";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/all-jobs",
                element: <AllPages></AllPages>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-jobs",
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
            },
            {
                path: "/my-posted-jobs",
                element: <PrivateRoutes><MyPostedJob></MyPostedJob></PrivateRoutes>
            },
            {
                path: "/bid-requests",
                element: <PrivateRoutes><BidRequest></BidRequest></PrivateRoutes>
            },
            {
                path: "/my-bids",
                element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
            },
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
            }

        ]
    }

])

export default router;