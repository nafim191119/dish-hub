import { FaShop } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
    const [cart] = useCart();
    const { user } = useContext(AuthContext);
    console.log(user.photoURL)
    return (
        <div className="mx-4">
            <h1 className="text-xl md:text-3xl mb-8 text-center">Hi, Welcome back <span className="text-primary font-bold text-2xl md:text-4xl">{user?.displayName}</span> </h1>
            <div className="mx-10 space-y-4 md:flex md:gap-8">
                <div className="bg-red-400 text-white px-16 py-4 rounded-lg flex items-center justify-center gap-4">
                    <div className="text-3xl">
                        <MdMenuBook />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">205</h1>
                        <h1>Menu</h1>
                    </div>
                </div>
                <div className="bg-pink-400 text-white px-16 py-4 rounded-lg flex items-center justify-center gap-4">
                    <div className="text-3xl">
                        <FaShop />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">103</h1>
                        <h1>Shop</h1>
                    </div>
                </div>
                <div className="bg-blue-400 text-white px-16 py-4 rounded-lg flex items-center justify-center gap-4">
                    <div className="text-3xl">
                        <IoCallSharp />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">3</h1>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center items-center mt-10">
                <div className="bg-yellow-200 py-20 px-32 h-72">
                    <div className="avatar">
                        <div className="w-30 rounded-full mx-8">
                            <img src={user.photoURL} alt="user" />
                        </div>
                    </div>
                    <div className="mt-2 text-center">
                        <h1 className="font-bold">{user?.displayName}</h1>
                    </div>
                </div>
                <div className="bg-blue-200 py-20 px-32 h-72">
                    <h1 className="text-2xl font-bold">Your Activities</h1>
                    <p>Order: {cart?.length}</p>
                    <p>Reviews: {cart.reviews ? cart.reviews : "0"}</p>
                    <p>Bookings: {cart.bookings ? cart.bookings : "0"}</p>
                    <p>Payment: Coming soon</p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;