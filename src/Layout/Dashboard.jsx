import { Link, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[250px] md:w-[300px] min-h-full bg-yellow-700 text-white text-md font-semibold uppercase">
                    {/* Sidebar content here */}
                    <div className="mb-6 text-xl md:text-2xl font-bold uppercase">
                        <Link to='/'>Dish hub restuarent </Link>
                    </div>
                    <li><a> <IoHomeSharp /> User Home</a></li>
                    <li><a> <SlCalender /> Reservation</a></li>
                    <li><a> <MdOutlinePayment /> Payment History</a></li>
                    <li><a> <FaCartPlus /> My Cart</a></li>
                    <li><a> <MdRateReview /> Add Review</a></li>
                    <li><a> <FaBook /> My Booking</a></li>
                    <div className="divider"></div>
                    <li><Link to='/'> <FaHome/> Home</Link></li>
                    <li><Link to='/menu'><MdMenuBook /> Our Menu</Link></li>
                    <li><Link to='/order'><FaBagShopping /> Shop</Link></li>
                    <li><Link to='/contact'> <RiContactsBook2Fill />Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;