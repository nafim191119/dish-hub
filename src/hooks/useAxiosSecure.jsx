import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    })
    return (
        <div>

        </div>
    );
};

export default useAxiosSecure;