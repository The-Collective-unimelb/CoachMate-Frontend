import classes from "./CoachCard.module.css"
import testPic from "../../assets/profile pic.png";

function CoachCard(props) {
    return (<div className={classes["coach-cards"]}>
        <img className={classes.pic} src={testPic} alt="test profile pic"/>
        <h2>{props.name}</h2>
        <p>{props.avail}</p>
        <h3>{props.location}</h3>
    </div>);

}

export default CoachCard;