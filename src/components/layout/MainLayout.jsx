/* eslint-disable react/prop-types */
import Navbar from "../Navbar";

        
        
const MainLayout = ({children}) => {
    return (
        <div>
          <Navbar></Navbar>
          {children}
        </div>
    );
};

export default MainLayout;