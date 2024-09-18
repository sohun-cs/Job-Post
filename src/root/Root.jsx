import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Root = () => {
    return (
        <div className="container mx-auto font-lato">
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;