import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AddJob from "../Components/Addjob/AddJob";
import MyJob from "../Components/MyJob/MyJob";
import MyBidRequest from "../Components/MyBidRequest/MyBidRequest";
import Bid from "../Components/Bid/Bid";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
           {
            path:"/",
            element:<Home></Home>
           },
           {
            path:"/addJob",
            element:<AddJob></AddJob>
           },
           {
            path:"/myJob",
            element:<MyJob></MyJob>
           },
           {
            path:"/request",
            element:<MyBidRequest></MyBidRequest>
           },
           {
            path:"/bid",
            element:<Bid></Bid>
           },
           {
            path:"/profile",
            element:<Profile></Profile>
           },
           {
            path:"/login",
            element:<Login></Login>
           },
           {
            path:"/register",
            element:<Register></Register>
           }
        ]
    }
])

export default router;