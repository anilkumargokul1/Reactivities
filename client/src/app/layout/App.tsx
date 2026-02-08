import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  // const [activities, setactivities]=useState<Activity[]>([]);
  // const [selectedactivity, setSelectedActity]=useState<Activity|undefined>(undefined);
  // const [editMode, setEditMode]=useState(false);
  // useEffect(()=>{
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //   .then(response=>setactivities(response.data))
  // },[])
  // const handleselectedActivity=(id: string)=>{
  //   setSelectedActity(activities!.find((x:Activity)=>x.id===id))
  // }
  // const handlecancelselectivity=()=>{
  //   setSelectedActity(undefined)
  // }
  // const handleOpenForm=(id?:string)=>{
  //   if(id)
  //     handleselectedActivity(id);
  //   else
  //     handlecancelselectivity();
  //   setEditMode(true);
  // }
  // const handleCloseForm=()=>{
  //   setEditMode(false);
  // }
  // const handleSubmitForm=(activity:Activity)=>
  // {
  //   // if(activity.id){
  //   //   setactivities(activities.map(x=>x.id===activity.id?activity:x))
  //   //   setSelectedActity(activity)
  //   // }
  //   // else
  //   // {
  //   //   const newActivity={...activity,id:activities.length.toString()}
  //   //   setSelectedActity(newActivity)
  //   //   setactivities([...activities,newActivity])
  //   // }
  //   console.log(activity);
  //   setEditMode(false);
  // }
  return (
    <>
    <Box sx={{bgcolor:'#eeeeee',minHeight:'100vh'}}>
      <CssBaseline/>
      <Navbar/>
      <Container maxWidth='xl' sx={{mt:3}}>
       <Outlet></Outlet>
      </Container>
    </Box>
    </>
  )
}

export default App
