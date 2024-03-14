import { Helmet } from "react-helmet";
import CardItems from "../Shared/CardItems/CardItems";
import Banner from "./Banner/Banner";
import Catagory from "./Catagory/Catagory";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dish Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <CardItems></CardItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;