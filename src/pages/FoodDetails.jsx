import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useSingleFood from "../hooks/useSingleFood";
import moment from 'moment'
import { useState } from "react";
import PageDynamicTitle from "../components/PageDynamicTitle";




const FoodDetails = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const { data, isLoading } = useSingleFood(id)
    const [isModelClose, setIsModalClose] = useState(false)
    const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false)
    const navigate = useNavigate()

    // console.log(id)
    // console.log(user.email)

    const { _id, donorName, pickupLocation, foodImage, foodName, foodQuantity, expireDate, donorEmail, foodStatus } = data || {}
    const requestDate = new Date()
    // const donationAmount = 100;
    const foodOldId = _id;


    // console.log("Food details", data)

    if (isLoading) {
        return <Spinner></Spinner>
    }



    const handleRequest = event => {
        event.preventDefault()
        const requesterName = user?.displayName;
        const requesterEmail = user?.email;
        const requesterImage = user?.photoURL;
        const foodId = _id;
        const requestDate = moment().format("h:mm:ss a, D-M-YYYY");
        const donationMoney = event.target.donationMoney.value;
        const additionalNote = event.target.additionalNote.value;
        const request = { requesterName, requesterEmail, requesterImage, requestDate, foodId, foodStatus, foodName, foodImage, donorEmail, donorName, pickupLocation, expireDate, additionalNote, donationMoney };

        axios.post(`http://localhost:5000/api/v1/user/food-requests`, request)
            .then(res => {
                console.log("food request: ", res.data)
                if (res.data.insertedId) {
                    toast.success("You requested successfully")   
                }
                setIsModalClose(true)

            })
            navigate(`/available-foods`)
    }

    const handleCloseButton = () => {
        setIsCloseButtonClicked(true);
        setIsModalClose(false)     
        navigate(`/available-foods`)
    }


    return (
        <Container>
            <PageDynamicTitle pageTitle="Food Details" ></PageDynamicTitle>
            <div className="flex justify-center">
                <div className="card w-96 card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-96" src={foodImage} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName} </h2>
                        <p>Donor Name: {donorName} </p>
                        <p>Food pickup location: {pickupLocation} </p>
                        <p>Quantity: {foodQuantity} </p>
                        <p>Expire Date: {expireDate} </p>
                        <label htmlFor="my_modal_6" className="btn">Food Request</label>
                    </div>
                </div>
            </div>

            {/* Modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            {/* <div className="modal"> */}
            <div className={`${isModelClose|| isCloseButtonClicked ? "hidden" : "modal"}`}>
                <div className="modal-box">
                    <div>
                        <div>
                            <form onSubmit={handleRequest} className="space-y-2">
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food</span>
                                        <input type="text" name="foodName" defaultValue={foodName} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food Image</span>
                                        <input type="text" name="foodImage" defaultValue={foodImage} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Food ID</span>
                                        <input type="text" defaultValue={foodOldId} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donor Email</span>
                                        <input type="text" name="donorEmail" defaultValue={donorEmail} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donor Name</span>
                                        <input type="text" name="donorName" defaultValue={donorName} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Your Email</span>
                                        <input type="text" name="userEmail" defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Request Date</span>
                                        <input type="text" name="requestDate" defaultValue={requestDate} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Pickup Location</span>
                                        <input type="text" name="pickupLocation" defaultValue={pickupLocation} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Expire Date</span>
                                        <input type="text" name="expiredDateTime" defaultValue={expireDate} disabled placeholder="Type here" className="input input-bordered input-xs" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Notes</span>
                                        <input type="text" name="additionalNote" placeholder="Type here" className="input input-bordered input-md" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-xs">
                                        <span>Donation Amount</span>
                                        <input type="text" name="donationMoney" placeholder="Type here" className="input input-bordered input-xs"

                                        />
                                    </label>
                                </div>


                                <div className="modal-action">
                                    <button type="submit" htmlFor="my_modal_6" className="btn btn-primary">Send Request</button>
                                </div>
                            </form>

                            <div className="mt-5">
                                <button onClick={handleCloseButton} className="btn btn-warning">Close Request</button>
                            </div>

                            {/* <div className="modal-action">
                            <label onClick={handleRequest} htmlFor="my_modal_6" className="btn">Send Request</label>
                         </div>  */}
                        </div>

                    </div>
                </div>

            </div>
        </Container >
    );
};

export default FoodDetails;