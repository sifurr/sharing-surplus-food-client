import Spinner from "./Spinner";
import Container from "./ui/Container";
import Food from "./Food";
import { Link } from "react-router-dom";
import useFoods from "../hooks/useFoods";


const FeaturedFoods = () => {

    const { data, isLoading } = useFoods()

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
                    data?.sort(function (a, b) { return b.foodQuantity - a.foodQuantity }).slice(0, 6).map(food => <Food key={food._id} food={food}> </Food>)
                }
            </div>
        </Container>
    );
};

export default FeaturedFoods;