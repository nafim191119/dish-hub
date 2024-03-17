import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Bar from "../Pages/Shared/Bar/Bar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noBarFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noBarFooter || <Bar></Bar>}
            <Outlet></Outlet>
            {noBarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;