import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto font-lato">
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;