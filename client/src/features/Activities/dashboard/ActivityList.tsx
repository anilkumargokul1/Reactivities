import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
type Props={
    activities:Activity[]
    selectActivity:(id:string)=>void;
    deleteForm:(id:string)=>void;
}

export default function ActivityList({activities,selectActivity,deleteForm}:Props) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
        {activities.map(activity=>{
          return <ActivityCard key={activity.id} activity={activity}
          selectActivity={selectActivity} deleteForm={deleteForm}
          ></ActivityCard>
        })
        }
    </Box>
  )
}