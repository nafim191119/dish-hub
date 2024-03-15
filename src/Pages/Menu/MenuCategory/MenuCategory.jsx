import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div className="mx-12 mt-16 mb-16">
            <div className="grid md:grid-cols-2 gap-10 mb-4">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={'/order'}>
                <button className="btn btn-outline border-0 border-b-4 mx-auto uppercase flex justify-center">Order your favourite food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;