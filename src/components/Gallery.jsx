import PhotoAlbum from "react-photo-album";
import Container from "./ui/Container";
import { useEffect, useState } from "react";


const Gallery = () => {

    const [galleryImages, setGalleryImages] = useState([])

    useEffect(() => {
        fetch('https://community-food-sharing-server-two.vercel.app/api/v1/gallery')
            .then(res => res.json())
            .then(data => {
                console.log("from gallery: ", data)
                setGalleryImages(data);
            })
    }, [])

    return (
        <Container>
            <h2 className='text-center my-5 text-4xl tracking-tight font-extrabold text-gray-900'>Gallery</h2>
            <PhotoAlbum layout="rows" photos={galleryImages} />
        </Container>
    );
};

export default Gallery;