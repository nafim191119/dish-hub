import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/usehooks";
import OrderTab from "../OrderTab/OrderTab";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover img={orderImg} title={"Order"} subTitle={"What you looking for?"}></Cover>
            <div className="flex justify-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="font-bold">
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab itmes={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab itmes={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab itmes={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab itmes={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab itmes={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;