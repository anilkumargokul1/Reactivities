import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Activitydashboard from "../../features/Activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setactivities]=useState<Activity[]>([]);
  const [selectedactivity, setSelectedActity]=useState<Activity|undefined>(undefined);
  const [editMode, setEditMode]=useState(false);
  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response=>setactivities(response.data))
  },[])
  const handleselectedActivity=(id: string)=>{
    setSelectedActity(activities.find(x=>x.id===id))
  }
  const handlecancelselectivity=()=>{
    setSelectedActity(undefined)
  }
  const handleOpenForm=(id?:string)=>{
    if(id)  
      handleselectedActivity(id); 
    else 
      handlecancelselectivity();
    setEditMode(true);
  }
  const handleCloseForm=()=>{
    setEditMode(false);
  }
  const handleSubmitForm=(activity:Activity)=>
  {
    if(activity.id){
      setactivities(activities.map(x=>x.id===activity.id?activity:x))
      setSelectedActity(activity)
    }
    else
    {
      const newActivity={...activity,id:activities.length.toString()}
      setSelectedActity(newActivity)
      setactivities([...activities,newActivity])
    }
    setEditMode(false);
  }
  const deleteForm=(id:string)=>
  {
      setactivities(activities.filter(x=>x.id!==id));
  }
  return (
    <>
    <Box sx={{bgcolor:'#eeeeee'}}>
      <CssBaseline/>
      <Navbar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{mt:3}}>
        <Activitydashboard activities={activities}
        selectActivity={handleselectedActivity}
        cancelSelectActivity={handlecancelselectivity}
        selectedActivity={selectedactivity}
        editMode={editMode}
        closeForm={handleCloseForm}
        openForm={handleOpenForm}
        submitForm={handleSubmitForm}
        deleteForm={deleteForm}
        />
      </Container>
    </Box>
    </>
  )
}

export default App
