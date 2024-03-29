import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaUserShield } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://food-server-virid-sigma.vercel.app/users');
            return res.json();
        }
    });

    const handleMakeAdmin = user => {
        fetch(`https://food-server-virid-sigma.vercel.app/users/admin/${user.id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = user => {

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Dish Hub | All User</title>
            </Helmet>
            <div className="mx-10">
                <h3 className="text-4xl font-bold mb-8">Total User: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-yellow-600 text-white"><FaUserShield></FaUserShield></button>

                                    }</td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><MdDelete /></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;