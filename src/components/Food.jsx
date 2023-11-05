import { Link } from "react-router-dom";


const Food = ({food}) => {
    const {_id,foodName,foodImage,foodQuantity,pickupLocation,expiredDateTime,additionalNotes,donorImage,donorName,donorEmail,foodStatus} = food || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName} </h2>
                    <p>{donorName} </p>
                    <p>{donorImage && donorImage} </p>
                    <p>{foodQuantity} </p>
                    <p>{pickupLocation} </p>
                    <p>{expiredDateTime} </p>
                    <p>{additionalNotes} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/food-details/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;