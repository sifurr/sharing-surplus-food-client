import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import Spinner from "./Spinner";
import Container from "./ui/Container";
import Food from "./Food";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['featuredFoods'],
        queryFn: async () => {
            return await axios.get(`http://localhost:5000/api/v1/foods`)
        }
    })

    // console.log("data: ", Object.keys(data.data[0]).join(','));

    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <Container>
            <h2 className='text-3xl text-center'>FeaturedFoods </h2>
            <div className="flex justify-center my-3">
                <Link to={'/available-foods'} className="btn btn-primary">Show All</Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    data?.data?.sort(function (a, b) { return b.foodQuantity - a.foodQuantity }).slice(0, 6).map(food => <Food key={food._id} food={food}> </Food>)
                }
            </div>
        </Container>
    );
};

export default FeaturedFoods;