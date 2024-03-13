import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Bar from "../Pages/Shared/Bar/Bar";


const Main = () => {
    return (
        <div>
            <Bar></Bar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;