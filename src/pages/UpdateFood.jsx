import { useParams } from "react-router-dom";
import useSingleFood from "../hooks/useSingleFood";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import axios from "axios";
import moment from 'moment';
import toast from "react-hot-toast";

const UpdateFood = () => {
    const { id } = useParams()
    const { user } = useAuth()
    // const navigate = useNavigate();
    // console.log(id);

    const { data, isLoading, refetch } = useSingleFood(id)
    const { donorName, pickupLocation, foodImage, foodName, foodQuantity, expireDate, donorEmail, donorImage, additionalNote, foodStatus } = data || {}

    // console.log("Data form update: ", data)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleFoodUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const donorName = form.donorName.value;
        const donorEmail = form.donorEmail.value;
        const donorImage = form.donorImage.value;
        const additionalNote = form.additionalNote.value;
        const foodStatus = form.foodStatus.value;            

        const updatedDate = moment().format("h:mm:ss a, D-M-YYYY");
        const foodInfo = { foodImage, foodName, foodQuantity, pickupLocation, expireDate, donorName, donorEmail, donorImage, additionalNote, foodStatus, updatedDate };
        // console.log(project);

        axios.patch(`http://localhost:5000/api/v1/user/update-food/${id}`, foodInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated successfully!")
                    // refetch();
                    // navigate("/");
                }
            })
    }




    return (

        <div>
            <h2 className='text-3xl text-center'>Update Food</h2>
            <div className="w-2/3 mx-auto">
                <form onSubmit={handleFoodUpdate} className="space-y-2">
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Name</span>
                            <input defaultValue={foodName} type="text" name="foodName" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Image</span>
                            <input defaultValue={foodImage} type="text" name="foodImage" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Food Quantity</span>
                            <input defaultValue={foodQuantity} type="text" name="foodQuantity" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Pickup Location</span>
                            <input defaultValue={pickupLocation} type="text" name="pickupLocation" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Expire Date</span>
                            <input defaultValue={expireDate} type="date" name="expireDate" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Name</span>
                            <input defaultValue={user?.displayName} type="text" name="donorName" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Photo</span>
                            <input defaultValue={user?.photoURL} type="text" name="donorImage" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Email</span>
                            <input defaultValue={user?.email} type="text" name="donorEmail" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Additional Notes</span>
                            <input defaultValue={additionalNote} type="text" name="additionalNote" placeholder="Type here" className="input input-bordered input-md w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Status</span>
                            <select name="foodStatus" className="select select-bordered w-full max-w-xs">
                                <option value={foodStatus}>{foodStatus}</option>
                                <option value={"available"}>Available</option>
                                <option value={"pending"}>Pending</option>
                                <option value={"delivered"}>Delivered</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group">
                            <input type="submit" className="input input-bordered w-full btn" value="Update Food"
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;