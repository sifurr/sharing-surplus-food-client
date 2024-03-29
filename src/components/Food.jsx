import { Link } from "react-router-dom";

// https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

const Food = ({ food }) => {
    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expireDate, foodStatus, additionalNote, donorImage, donorName } = food || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={foodImage} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName} </h2>
                    <p>Donor name:{donorName} </p>
                    <p>Donor Photo:</p>
                    <div className="avatar">
                        <div className="w-10 lg:w-24 rounded">
                            <img src={donorImage && donorImage}  />
                        </div>
                    </div>
                    <p>Food Status: {foodStatus} </p>
                    <p>Food Quantity: {foodQuantity} </p>
                    <p>Pickup location: {pickupLocation} </p>
                    <p>Expire date: {expireDate} </p>
                    <p>Note: {additionalNote} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/food-details/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;