import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Items from "./Items";
import useMenu from "../../../hooks/usehooks";

const CardItems = () => {

    const [menu] = useMenu()
    const recommendItems = menu.filter(item => item.category === 'recommend');
    
    return (
        <div className="mb-16 mx-12">
            <SectionTitle
            subHeading={"Should Try"}
            heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 mx-auto">
                {
                    recommendItems.map(item => <Items
                    key={item._id}
                    item={item}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default CardItems;