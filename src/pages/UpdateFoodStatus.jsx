import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSingleFood from "../hooks/useSingleFood";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import axios from "axios";
import moment from 'moment';
import toast from "react-hot-toast";
import PageDynamicTitle from "../components/PageDynamicTitle";

const UpdateFoodStatus = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(id);

    const { data, isLoading } = useSingleFood(id)
    const { foodStatus } = data || {}

    // console.log("Data form update: ", data)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleFoodStatusUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const foodStatus = form.foodStatus.value;
        const foodInfo = { foodStatus };
        // console.log(project);

        axios.patch(`https://b8a11-server-side-sifurr.vercel.app/api/v1/user/update-food-status/${id}`, foodInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Status updated successfully!")
                    navigate(location?.state ? location.state : '/')
                }
            })
    }

    return (
        <div>
            <PageDynamicTitle pageTitle="Update Food Status" ></PageDynamicTitle>
            <h2 className='text-3xl text-center'>Update Food Status</h2>
            <div className="w-1/3 mx-auto my-10">
                <form onSubmit={handleFoodStatusUpdate} className="space-y-2">
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
                            <input type="submit" className="input input-bordered w-full btn" value="Update Status"
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFoodStatus;