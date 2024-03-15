import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({ itmes }) => {
    return (
        <div>
            <div className="space-y-6 md:grid grid-cols-3 gap-4 mx-16 my-4">
                {
                    itmes.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;