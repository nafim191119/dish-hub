import { Link, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaBook, FaBookOpen, FaUserCheck } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;

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
                    <div className="mb-4 text-xl md:text-2xl font-bold uppercase">
                        <Link to='/'>Dish hub restuarent </Link>
                    </div>
                    {
                        isAdmin ?
                            <>
                                <li><Link to={'/dashboard/userHome'}> <IoHomeSharp />Admin Home</Link></li>
                                <li><Link to={'/dashboard/reservation'}> <SlCalender /> Add Items</Link></li>
                                <li><Link to={'/dashboard/payment'}> <MdOutlinePayment /> Manage Items</Link></li>
                                <li><Link to={'/dashboard/mycart'}> <FaBookOpen />Manage Bookings</Link></li>
                                <li><Link to={'/dashboard/allUsers'}> <FaUserCheck /> All User</Link></li>
                            </>
                            :
                            <>
                                <li><Link to={'/dashboard/userHome'}> <IoHomeSharp /> User Home</Link></li>
                                <li><Link to={'/dashboard/reservation'}> <SlCalender /> Reservation</Link></li>
                                <li><Link to={'/dashboard/payment'}> <MdOutlinePayment /> Payment History</Link></li>
                                <li><Link to={'/dashboard/mycart'}> <FaCartPlus /> My Cart <span className="badge badge-secondary">+{cart?.length}</span></Link></li>
                                <li><Link to={'/dashboard/review'}> <MdRateReview /> Add Review</Link></li>
                                <li><Link to={'/dashboard/booking'}> <FaBook /> My Booking</Link></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><Link to='/'> <FaHome /> Home</Link></li>
                    <li><Link to='/menu'><MdMenuBook /> Our Menu</Link></li>
                    <li><Link to='/order'><FaBagShopping /> Shop</Link></li>
                    <li><Link to='/contact'> <RiContactsBook2Fill />Contact</Link></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;