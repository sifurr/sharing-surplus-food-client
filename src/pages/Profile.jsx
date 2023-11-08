import PageDynamicTitle from "../components/PageDynamicTitle";
import useAuth from "../hooks/useAuth";



const Profile = () => {
    const { user } = useAuth()

    return (
        <div>
            <PageDynamicTitle pageTitle="My Profile" ></PageDynamicTitle>
            <h2 className='text-3xl text-center'>Your Profile</h2>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure><img src={user?.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl">
                        {user?.displayName}                        
                    </h2>
                    <p>{user?.email}</p>                   
                </div>
            </div>
        </div>
    );
};

export default Profile;