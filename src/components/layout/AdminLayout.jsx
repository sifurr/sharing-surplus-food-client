/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { Toaster } from "react-hot-toast";


const AdminLayout = () => {
    return (
        <div>
            <div className="flex h-screen">
                <div className="flex-[1] bg-neutral-100" >
                    <AdminNavbar></AdminNavbar>
                </div>
                <div className="flex-[4]">
                    <Outlet></Outlet>
                </div>              
            </div>
            <div><Toaster/></div>

        </div>
    );
};

export default AdminLayout;