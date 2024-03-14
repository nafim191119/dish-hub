
const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img className="w-[70px] h-[80px] md:w-[80px]" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 font-bold">{price}</p>
        </div>
    );
};

export default MenuItem;