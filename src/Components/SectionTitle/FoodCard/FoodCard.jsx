import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();


    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const orderItem = {menuItemId: _id, name, image, price, recipe, email: user.email}
            fetch('https://food-server-virid-sigma.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfuly Items added",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login to order the food",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-[250px] md:w-[300px] card-compact md:card-compact bg-base-100 shadow-2xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title hover:underline">{name}</h2>
                    <h2 className="card-title text-secondary font-bold">${price}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;