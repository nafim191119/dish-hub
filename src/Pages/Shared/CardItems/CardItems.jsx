import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Items from "./Items";

const CardItems = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const recommendItems = data.filter(item => item.category === 'recommend');
            setMenu(recommendItems)
        })
    }, [])

    return (
        <div className="mb-16 mx-12">
            <SectionTitle
            subHeading={"Should Try"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 mx-auto">
                {
                    menu.map(item => <Items
                    key={item._id}
                    item={item}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default CardItems;