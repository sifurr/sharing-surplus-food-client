import Footer from "../Footer";
import MainNavbar from "../MainNavbar";
import {motion, useScroll} from 'framer-motion'



const MainLayout = ({ children }) => {
    
    const {scrollYProgress} = useScroll()

    return (
        <div>
            <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                background: "#570df8",
                top:0,
                right:0,
                left:0,
                height:15,
                transformOrigin:"0%",
                zIndex: 100000
            }}
             />
            

            <MainNavbar></MainNavbar>
            {children}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;