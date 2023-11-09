import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/food-sharing-logo.png'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'
import './MainNavbar.css'


const MainNavbar = () => {

    const { logout, user } = useAuth()


    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logged out!"))
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar px-10 sticky top-0 w-full  z-50 text-black backdrop-filter backdrop-blur-md bg-gray-100 border-b border-gray-100 shadow-lg">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black dark:text-blue-600 rounded-box w-52">
                        {
                            !user ?
                                <>
                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                    <li><Link to={'/login'} className="lg:hidden block">Login</Link></li>
                                    <Link to={'/register'}>Register</Link>
                                </>
                                :
                                <>
                                    <li><Link className="lg:hidden block">{user?.displayName}</Link></li>
                                    <li><Link to={'add-food'}>Add Food</Link> </li>
                                    <li><Link to={'manage-my-food'}>Manage My Foods </Link> </li>
                                    <li><Link to={'my-food-requests'}>My Food Request </Link> </li>
                                    <li><Link to={'profile'}>My Profile</Link> </li>
                                </>
                        }
                    </ul>
                </div>
                <div>
                    <Link className="normal-case text-xl flex items-center gap-3">
                        <img src={logo} className="w-[60px] lg:w-[60px]" alt="" />
                        <span className='font-bold text-lg mr-5 lg:mr-0 lg:text-2xl'>Food <span className=''>Sharing</span></span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="px-1 flex gap-3">
                    {
                        !user ?
                            <>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/available-foods'}>Available Foods</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={'add-food'}>Add Food</NavLink> </li>
                                <li><NavLink to={'manage-my-food'}>Manage My Foods </NavLink> </li>
                                <li><NavLink to={'my-food-requests'}>My Food Request </NavLink> </li>
                                <li><NavLink to={'profile'}>My Profile</NavLink> </li>
                            </>
                    }
                </ul>
            </div>



            <div className="navbar-end space-x-3">
                {
                    user ?
                        <>
                            <Link to={`/`} onClick={handleLogout} className="hidden lg:block">Logout</Link>
                            <Link className="hidden lg:block">{user?.displayName}</Link>
                            <Link className="">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user?.photoURL}></img>
                                                : <img src="https://i.ibb.co/sK9NL0m/avatar1.png" />
                                        }
                                    </div>
                                </label>
                            </Link>

                        </>
                        :
                        <>
                            <Link to={`/login`} className="hidden lg:block">Login</Link>
                            <Link to={'/register'} className="hidden lg:block">Register</Link>
                        </>
                }

            </div>

        </div>

    );
};

export default MainNavbar;