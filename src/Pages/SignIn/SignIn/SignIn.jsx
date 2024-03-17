import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }


    return (
        <div>
            <Helmet>
                <title>Dish Hub | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col lg:w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name="email" placeholder="Email" className="input input-bordered"  />
                                {errors.email && <span className="text-red-600">Email is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" name="password" placeholder="Password" className="input input-bordered"  />
                                {errors.password && <span className="text-red-600">Password is Required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={"Sign Up"} className="btn btn-primary text-white btn-primary hover:scale-105 transition-transform duration-300 ease-in-out"></input>
                            </div>
                            <label className="label mx-auto">
                                <Link to={'/login'} className="label-text-alt link link-hover text-primary">Already member? Login now!</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;