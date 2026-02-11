import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Homepage from "../../features/home/HomePage";
import Activitydashboard from "../../features/Activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/Activities/form/ActivityForm";
import ActivityDetailPage from "../../features/Activities/details/ActivityDetailPage";

export const router=createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children:[
        { path:'', element: <Homepage/> },
        { path:'activities', element: <Activitydashboard/> },
        { path:'activities/:id', element: <ActivityDetailPage/> },
        { path:'createActivity', element: <ActivityForm key='create'/> },
        { path:'manage/:id', element: <ActivityForm/> }
    ]
}])