import { Link } from "react-router-dom";
import classes from "./CoachDashboard.module.css";
import pfp from "../../assets/pfp-blue.jpg";

function CoachDashboard() {
  return (
    <div className={classes["vertical-flex"]}>
      <h1 className={classes["heading"]}>DASHBOARD</h1>
      <div className={classes["dashboard-grid-container"]}>
        <div className={classes["profile-column"]}>
          <div className={classes["profile-box"]}>
            <img
              src={pfp}
              className={classes["profile-pic"]}
              alt="profile pic"
            ></img>
            <h2 className={classes["profile-username"]}>Username</h2>
          </div>
        </div>
        <div className={classes["dashboard-buttons-grid-container"]}>
          <Link to="/coach-profile" className={classes.link}>
            COACH PROFILE
          </Link>
          <Link to="/edit-profile" className={classes.link}>
            EDIT PROFILE
          </Link>
          <Link to="/coaches" className={classes.link}>
            COACHLIST
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoachDashboard;
