import classes from "./CoachCard.module.css"
import testPic from "../../assets/profile pic.png";

function CoachCard() {
    return (<div className={classes["coach-cards"]}>
        <img className={classes.pic} src={testPic} alt="test profile pic"/>
        <h2>Name</h2>
        <p>Next availability</p>
        <h3>Location</h3>
    </div>);

}

export default CoachCard;