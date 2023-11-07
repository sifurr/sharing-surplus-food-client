import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import AvailableFoods from "../pages/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequests from "../pages/MyFoodRequests";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import UpdateFood from "../pages/UpdateFood";
import ManageSingleFood from "../pages/ManageSingleFood";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <div>404</div>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'available-foods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: 'food-details/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path: 'update-food/:id',
                element: <PrivateRoute><UpdateFood></UpdateFood> </PrivateRoute>
            },
            {
                path: 'add-food',
                element: <PrivateRoute><AddFood></AddFood> </PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },

            {
                path: 'manage-my-food',
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods> </PrivateRoute>
            },
            {
                path: 'manage-single-food/:id',
                element: <PrivateRoute><ManageSingleFood></ManageSingleFood> </PrivateRoute>
            },
            {
                path: 'my-food-requests',
                element: <PrivateRoute> <MyFoodRequests></MyFoodRequests> </PrivateRoute>
            },
        ]
    },
    // {
    //     path: '/user',
    //     element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
    //     children: [
    //         // {
    //         //     index: true,
    //         //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    //         // },
    // {
    //     path: 'add-food',
    //     element: <PrivateRoute><AddFood></AddFood> </PrivateRoute>
    // },
    //         // {
    //         //     path: 'profile',
    //         //     element: <PrivateRoute><Profile></Profile></PrivateRoute>
    //         // },

    //         // {
    //         //     path: 'manage-my-food',
    //         //     element: <PrivateRoute><ManageMyFoods></ManageMyFoods> </PrivateRoute>
    //         // },
    //         // {
    //         //     path: 'my-food-requests',
    //         //     element: <PrivateRoute> <MyFoodRequests></MyFoodRequests> </PrivateRoute>
    //         // },

    //     ]
    // }
])

export default routes;