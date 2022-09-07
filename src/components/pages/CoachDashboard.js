import { Link } from "react-router-dom";
import classes from "./CoachDashboard.module.css";

function CoachDashboard() {
  return (
    <div className={classes["vertical-flex"]}>
      <Link to="/coach-profile" className={classes.link}>COACH PROFILE</Link>
      <br></br>
      <Link to="/edit-profile" className={classes.link}>EDIT PROFILE</Link>
    </div>
  );
}

export default CoachDashboard;
