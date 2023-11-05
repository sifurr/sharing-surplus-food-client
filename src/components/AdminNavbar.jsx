import { Link, NavLink } from "react-router-dom";


const AdminNavbar = () => {
    return (
        <div>
            <Link to={''} className='text-3xl text-center'> Dashboard</Link>
            <ul>                
                <li><NavLink to={'/'}>Home</NavLink> </li>
                <li><NavLink to={'/available-foods'}  >Available Foods</NavLink> </li>
                <li><NavLink to={''} >Add Food</NavLink> </li>
                <li><NavLink to={''} >Manage My Foods </NavLink> </li>
                <li><NavLink to={''} >My Food Request </NavLink> </li>
                <li><NavLink to={''} >Manage My Food </NavLink> </li>
                <li><NavLink to={''} >Manage Single Food </NavLink> </li>
                <li><NavLink to={''} >My Food Request </NavLink> </li>
                <li><NavLink to={'profile'} >My Profile</NavLink> </li>
                <li><Link to={'/'} className="font-bold">Logout</Link> </li>           
            </ul>
        </div>
    );
};

export default AdminNavbar;