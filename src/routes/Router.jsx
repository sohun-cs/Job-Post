import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [

            {
                index: true,
                element: <Home></Home>
            },
           

        ]
    }

])

export default router;