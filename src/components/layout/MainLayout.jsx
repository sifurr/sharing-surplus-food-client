/* eslint-disable react/prop-types */
import Footer from "../Footer";
import MainNavbar from "../MainNavbar";



const MainLayout = ({ children }) => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            {children}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;