import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import Homepage from "../../features/home/HomePage";
import Activitydashboard from "../../features/Activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/Activities/form/ActivityForm";
import ActivityDetailPage from "../../features/Activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";
import TestErrors from "../../features/errors/Testerrors";
import NotFound from "../../features/errors/NotFound";
import ServerErrors from "../../features/errors/ServerErrors";

export const router=createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children:[
        { path:'', element: <Homepage/> },
        { path:'activities', element: <Activitydashboard/> },
        { path:'activities/:id', element: <ActivityDetailPage/> },
        { path:'createActivity', element: <ActivityForm key='create'/> },
        { path:'manage/:id', element: <ActivityForm/> },
        { path:'counter', element: <Counter/> },
        { path:'errors', element: <TestErrors/> },
        { path:'not-found', element: <NotFound/> },
        { path:'server-error', element: <ServerErrors/> },
        { path:'*', element: <Navigate replace to='/not-found'/> },
    ]
}])