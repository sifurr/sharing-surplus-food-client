import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const AdminNavbar = () => {

    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logged out!"))
            .catch(err => console.log(err))
      }

    return (
        <div>
            <Link to={''} className='text-3xl text-center'> Dashboard</Link>
            <ul>                
                <li><NavLink to={'/'}>Home</NavLink> </li>
                <li><NavLink to={'/available-foods'} >Available Foods</NavLink> </li>
                <li><NavLink to={'add-food'} >Add Food</NavLink> </li>
                <li><NavLink to={'manage-my-food'} >Manage My Foods </NavLink> </li>
                <li><NavLink to={'my-food-requests'} >My Food Request </NavLink> </li>                                           
                <li><NavLink to={'profile'} >My Profile</NavLink> </li>
                <li><Link to={'/'} onClick={handleLogout} className="font-bold">Logout</Link> </li>           
            </ul>
        </div>
    );
};

export default AdminNavbar;