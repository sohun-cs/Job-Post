import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div className="font-lato">
            <Navbar></Navbar>

            <div className="container mx-auto ">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;