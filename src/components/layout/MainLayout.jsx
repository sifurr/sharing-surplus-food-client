/* eslint-disable react/prop-types */
import MainNavbar from "../MainNavbar";



const MainLayout = ({ children }) => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            {children}
        </div>
    );
};

export default MainLayout;