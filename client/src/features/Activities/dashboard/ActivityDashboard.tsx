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
  submitForm:(activity:Activity)=>void;
  deleteForm:(id:string)=>void;
}
export default function Activitydashboard({activities,cancelSelectActivity,selectActivity,selectedActivity,
  editMode,closeForm,openForm,submitForm,deleteForm }:Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7} >
        <ActivityList activities={activities}
        selectActivity={selectActivity} deleteForm={deleteForm}></ActivityList>
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && <Activitydetail activity={selectedActivity}
        cancelSelectActivity ={cancelSelectActivity}
        openForm={openForm}
        ></Activitydetail>}
        {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} 
        submitForm={submitForm}></ActivityForm>}
      </Grid2>
    </Grid2>
  )
}
   