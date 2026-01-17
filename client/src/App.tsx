import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { Activity, useEffect, useState } from "react"

function App() {
  const title="Welcome to Reactivities"
  const [activities, setactivities]=useState<Activity[]>([]);
  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response=>setactivities(response.data))
  },[])
  return (
    <>
    <Typography variant="h3" className="app" style={{color:"red"}}>{title}</Typography>
    <List>
      {
        activities.map((activity)=>(
          <ListItem key={activity.id}><ListItemText>{activity.title}</ListItemText></ListItem>
        ))
      }
    </List>
    </>
  )
}

export default App
