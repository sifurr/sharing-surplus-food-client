import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import useAuth from "../hooks/useAuth";



const FoodDetails = () => {
    const { user } = useAuth()
    const { foodId } = useParams()
    // console.log(foodId)
    console.log(user.email)

    const { data, isLoading } = useQuery({
        queryKey: ['foodDetails'],
        queryFn: async () => {
            return await axios.get(`http://localhost:5000/api/v1/foods/${foodId}`)
        }
        // queryFn: fetch(`http://localhost:5000/api/v1/foods/${foodId}`).then(res => res.json())
    })


    console.log(data)

    if (isLoading) {
        return <Spinner></Spinner>
    }
    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donorImage, donorName, donorEmail, foodStatus } = data.data || {}

    return (
        <Container>
            <div className="flex justify-center">
                <div className="card w-96 card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-96" src="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName} </h2>

                        <p>Donor Name: {donorName} </p>
                        <p>Food pickup location: {pickupLocation} </p>

                        <p>Quantity: {foodQuantity} </p>
                        <p>Expire Date: {expiredDateTime} </p>

                        <div className="card-actions justify-end">

                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}


                        </div>

                        <label htmlFor="my_modal_6" className="btn">Food Request</label>
                        {/* <Link className="btn btn-primary">Food Request</Link> */}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {/* The button to open modal */}
            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div>
                        <div>
                            <form method="dialog" className="space-y-2">
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food</span>
                                        <input type="text" defaultValue={foodName} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food Image</span>
                                        <input type="text" defaultValue={foodImage} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food ID</span>
                                        <input type="text" defaultValue={'easy food id field dite hobe'} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donor Email</span>
                                        <input type="text" defaultValue={donorEmail} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donor Name</span>
                                        <input type="text" defaultValue={donorName} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Your Email</span>
                                        <input type="text" defaultValue={user.email} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Request Date</span>
                                        <input type="text" defaultValue={"request date (current time) dite hobe"} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Pickup Location</span>
                                        <input type="text" defaultValue={pickupLocation} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Expire Date</span>
                                        <input type="text" defaultValue={expiredDateTime} disabled placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Notes</span>
                                        <input type="text" defaultValue={additionalNotes} placeholder="Type here" className="input input-bordered input-md" />                                        
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donation Amount</span>
                                        <input type="text" defaultValue={"donation money field add korte hobe"} placeholder="Type here" className="input input-bordered input-xs" />                                        
                                    </label>
                                </div>                             

                            </form>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Request</label>
                        </div>
                    </div>
                </div>

            </div>
        </Container >
    );
};

export default FoodDetails;