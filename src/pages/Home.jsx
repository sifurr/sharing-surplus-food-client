import { useEffect, useState } from "react";
import FeaturedFoods from "../components/FeaturedFoods";
import Gallery from "../components/Gallery";
import PageDynamicTitle from "../components/PageDynamicTitle";
import Team from "../components/Team";
import Container from "../components/ui/Container";
import { Carousel } from 'flowbite-react'
import { Link } from "react-router-dom";


const Home = () => {

    const [sliderImages, setGalleryImages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/gallery')
            .then(res => res.json())
            .then(data => {
                // console.log("from gallery: ",data)
                setGalleryImages(data);
            })
    }, [])

    return (
        <Container>
            <PageDynamicTitle pageTitle="Home" ></PageDynamicTitle>
            {/* Hero section */}
            <div className="lg:h-56 hidden lg:block xl:h-80 2xl:h-96">
                <Carousel>
                    {
                        sliderImages.slice(0, (Math.random() * 5)).map(image =>
                            <div key={image._id}>
                                <img src={image.src} alt="..." />
                            </div>

                        )
                    }

                </Carousel>
            </div>
            <div className="text-center">
                <div className="">
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Donate Food</h1>
                        <p className="py-3 md: py:4 lg:py-6">Share your surplus for the community</p>
                        <Link to={'/register'} className="btn btn-sm md:btn-md lg:btn-lg btn-primary ">Get Connected</Link>
                    </div>
                </div>
            </div>

            {/* Featured Foods section */}
            <FeaturedFoods></FeaturedFoods>

            {/* Exra section 1 */}
            <Team></Team>
            {/* Exra section 2 */}
            <div>
                <Gallery></Gallery>
            </div>

        </Container>
    );
};

export default Home;