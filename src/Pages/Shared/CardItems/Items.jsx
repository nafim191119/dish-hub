
const Items = ({ item }) => {

    const { image, name, recipe, price } = item;
    return (
        <div className="mx-auto">
            <div className="card w-80 shadow-2xl glass">
                <figure><img src={image} alt="" className="" /></figure>
                <div className="card-body">
                    <div className="flex items-center gap-20">
                        <h2 className="card-title font-bold">{name}</h2>
                    </div>
                    <h2 className="text-secondary font-bold text-xl">{price}$</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;