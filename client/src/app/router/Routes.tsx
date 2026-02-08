import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Homepage from "../../features/home/HomePage";
import Activitydashboard from "../../features/Activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/Activities/form/ActivityForm";
import Activitydetail from "../../features/Activities/details/Activitydetail";

export const router=createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children:[
        { path:'', element: <Homepage/> },
        { path:'activities', element: <Activitydashboard/> },
        { path:'activities/:id', element: <Activitydetail/> },
        { path:'createActivity', element: <ActivityForm key='create'/> },
        { path:'manage/:id', element: <ActivityForm/> }
    ]
}])