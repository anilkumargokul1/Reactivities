import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import Activitydetail from "../details/Activitydetail";
import ActivityForm from "../form/ActivityForm";
type Props ={activities:Activity[]
  selectActivity:(id:string)=>void;
  cancelSelectActivity:()=>void;
  selectedActivity?:Activity
  editMode:boolean;
  closeForm:()=>void;
  openForm:(id?:string)=>void;
  // submitForm:(activity:Activity)=>void;
}
export default function Activitydashboard({activities,cancelSelectActivity,selectActivity,selectedActivity,
  editMode,closeForm,openForm }:Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7} >
        <ActivityList activities={activities}
        selectActivity={selectActivity} ></ActivityList>
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && <Activitydetail selectedactivity={selectedActivity}
        cancelSelectActivity ={cancelSelectActivity}
        openForm={openForm}
        ></Activitydetail>}
        {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} 
        ></ActivityForm>}
      </Grid2>
    </Grid2>
  )
}
   