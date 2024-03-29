import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = ({ item }) => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    console.log(total);

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-server-virid-sigma.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mx-2 mt-6">
            <Helmet>
                <title>Dish Hub | My Cart</title>
            </Helmet>
            {/* <SectionTitle subHeading={"My Vart"} heading={"Wanna Add more?"}></SectionTitle> */}
            <div className="bg-pink-400 rounder-lg">
                <div className="flex justify-center items-center gap-10 md:gap-28 bg-pink-400 py-4 px-8 md:p-10 rounded-lg text-white font-bold md:text-2xl uppercase">
                    <div>
                        <h2> Total Order: {cart.length}</h2>
                    </div>
                    <div>
                        <h2 className="">Total price: ${total}</h2>
                    </div>
                    <div>
                        <h2><Link to={"/dashboard/payment"}><button className="btn btn-sm bg-primary text-white font-bold px-8 rounded-full shadow-md transition hover:text-black duration-500 ease-in-out uppercase">Pay</button></Link></h2>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-x-auto p-4 bg-base-200">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Food</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((row, index) => <tr
                                        key={row._id}
                                    >
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-semibold">{row.name}</td>
                                        <td className="font-semibold">${row.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white"><MdDelete /></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;