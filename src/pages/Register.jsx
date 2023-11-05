import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useState } from "react";


const Register = () => {

    const { createUser, setLoading, googleLogin } = useAuth();
    const [inputError, setInputError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation();
    const navigate = useNavigate();




    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        const passwordConstraint = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

        if (!passwordConstraint.test(password)) {
            return setInputError(true);
        }

        console.log(name, email, password, photo)

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const newUser = res.user;

                setLoading(true)
                updateProfile(newUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log("Profile created"))
                    .catch(err => {
                        setErrorMsg(err.message)  
                        console.log(err)
                    })
                setLoading(false)
                toast.success("Registration successful")
                navigate('/')
            })
            .catch(err => {
                setErrorMsg(err.message)
                console.log(err)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {

                setErrorMsg('')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setErrorMsg(err.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Signup!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {
                        inputError
                        &&
                        <div className="text-sm text-red-500 pb-5">
                            <small>
                                - is less than 6 characters
                            </small>
                            <br />
                            <small>
                                - don't have a capital letter
                            </small>
                            <br />
                            <small>
                                - don't have a special character
                            </small>
                        </div>
                    }
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
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
                        <p>Already a member? <Link className="font-bold" to={'/login'} >Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;