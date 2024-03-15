import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/usehooks";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Dish Hub | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} subTitle={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <Cover img={dessertImg} title={"dessert"} subTitle={"Would you like to try a dish?"}></Cover>
            <MenuCategory items={dessert}></MenuCategory>
            <Cover img={pizzaImg} title={"pizza"} subTitle={"Would you like to try a dish?"}></Cover>
            <MenuCategory items={pizza}></MenuCategory>
            <Cover img={saladImg} title={"salad"} subTitle={"Would you like to try a dish?"}></Cover>
            <MenuCategory items={salad}></MenuCategory>
            <Cover img={soupImg} title={"soup"} subTitle={"Would you like to try a dish?"}></Cover>
            <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;