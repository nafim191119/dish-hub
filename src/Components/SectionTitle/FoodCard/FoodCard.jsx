
const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div>
            <div className="card w-[250px] md:w-[300px] card-compact md:card-compact bg-base-100 shadow-2xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title hover:underline">{name}</h2>
                    <h2 className="card-title text-secondary font-bold">${price}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;