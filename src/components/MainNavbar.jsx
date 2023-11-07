import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/food-sharing-logo.png'
import Container from "./ui/Container";
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'


const MainNavbar = () => {

  const { logout, user } = useAuth()

  const navlinks =
    <>
      <li><NavLink to={'/'} >Home</NavLink></li>
      <li><NavLink to={'/available-foods'}>Available Foods</NavLink></li>
      {
        user?.email &&
        <>
          <li><NavLink to={'add-food'}>Add Food</NavLink> </li>
          <li><NavLink to={'manage-my-food'} >Manage My Foods </NavLink> </li>
          <li><NavLink to={'my-food-requests'} >My Food Request </NavLink> </li>
          <li><NavLink to={'profile'} >My Profile</NavLink> </li>
          

        </>
      }
    </>


  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out!"))
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-14" src={logo} alt="" />
            <Link className="normal-case text-xl">Food Sharing</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?
              <Link onClick={handleLogout} to={'/'} className="mr-5 btn-neutral btn btn-sm"> Logout {user.email} </Link>
              :
              <Link to={'/login'} className="mr-5 btn-neutral btn btn-sm">Login</Link>
          }
          <Link to={'/register'} className="mr-5 btn-primary btn btn-sm">Signup</Link>
        </div>
      </div>
    </Container>
  );
};

export default MainNavbar;