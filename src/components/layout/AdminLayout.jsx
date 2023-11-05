import { Outlet } from "react-router-dom";

        
        
const AdminLayout = () => {
    return (
        <div>
           <h2 className='text-3xl text-center'>AdminLayout</h2>
           <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;