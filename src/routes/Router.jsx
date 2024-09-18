import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import AllPages from "../pages/all-pages/AllPages";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [

            {
                index: true,
                element: <Home></Home>
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
            }

           

        ]
    }

])

export default router;