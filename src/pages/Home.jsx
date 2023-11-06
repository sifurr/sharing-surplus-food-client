import FeaturedFoods from "../components/FeaturedFoods";
import Container from "../components/ui/Container";



const Home = () => {
    return (
        <Container>
            {/* Hero section */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Donate Food</h1>
                        <p className="py-6">Share your surplus for the community</p>
                        <button className="btn btn-primary">Get Involved</button>
                    </div>
                </div>
            </div>

            {/* Featured Foods section */}
            <FeaturedFoods></FeaturedFoods>
            
            {/* Exra section 1 */}
            <div><h2 className="text-3xl text-center bg-purple-700">Extra section - 1 </h2></div>
            {/* Exra section 2 */}
            <div><h2 className="text-3xl text-center bg-orange-300">Extra section - 2 </h2></div>            

        </Container>
    );
};

export default Home;