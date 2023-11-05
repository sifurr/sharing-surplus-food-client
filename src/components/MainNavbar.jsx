import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/food-sharing-logo.png'
import Container from "./ui/Container";


const MainNavbar = () => {

  const navlinks =
    <>
      <li><NavLink to={'/'} >Home</NavLink></li>
      <li><NavLink to={'/available-foods'}>Available Foods</NavLink></li>
      <li><NavLink to={'/about'} >About</NavLink></li>
      <li><NavLink to={'/contact'} >Contact</NavLink></li>
    </>

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
          <Link to={'/login'} className="mr-5 btn-neutral btn btn-sm">Login</Link>
          <Link to={'/'} className="mr-5 btn-neutral btn btn-sm">Logout</Link>
          <Link to={'/register'} className="mr-5 btn-primary btn btn-sm">Signup</Link>
        </div>
      </div>
    </Container>
  );
};

export default MainNavbar;