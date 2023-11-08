import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import PageDynamicTitle from "../components/PageDynamicTitle";



const Login = () => {

    const { login, googleLogin } = useAuth();
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate()
    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
            .then(res => {
                // console.log(res.user)
                const user = { email };

                axios.post(`http://localhost:5000/api/v1/auth/access-token`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {                            
                            toast.success("Logged in successfully")
                            setErrorMsg('')
                            navigate(location?.state ? location.state : '/')
                        }
                    })

            })
            .catch(err => {
                toast.error(err.message)
                setErrorMsg(err.message)
                // console.log(err)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                // console.log(res)
                const email = res.user.email;
                // console.log("from google sign-in",email)
                const user = { email };

                axios.post(`http://localhost:5000/api/v1/auth/access-token`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {                            
                            toast.success("Logged in successfully")
                            setErrorMsg('')
                            navigate(location?.state ? location.state : '/')
                        }
                    })               
            })
            .catch(err => {
                toast.error(err.message)
                setErrorMsg(err.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <PageDynamicTitle pageTitle="Login" ></PageDynamicTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5">
                        <div>
                            <Link onClick={handleGoogleLogin} className="btn btn-primary" >Login with Google</Link>
                            <p className="text-red-500 text-sm mb-5 text-center">
                                {
                                    errorMsg ? errorMsg : ''
                                }
                            </p>
                        </div>
                        <p>Already a member? <Link className="font-bold" to={'/register'} >Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;