import Container from "../components/ui/Container";



const Home = () => {
    return (
        <Container>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Donate Surplus Food</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;