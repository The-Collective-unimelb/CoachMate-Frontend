import classes from "./Welcome.module.css";
import Card from "../UI/Card";
import netball from "../../assets/netball.png";
import Button from "../UI/Button";

function Welcome() {
  return (
    <div className={classes["vertical-flex"]}>
      <h1>SEARCH COACHMATE</h1>
      <div className={classes["horizontal-search-flex"]}>
        <div className={classes["flexbox-form"]}>
          <input
            className={classes.entries}
            name="Name"
            type="text"
            placeholder="SPORT"
          />
        </div>
        <div className={classes["flexbox-form"]}>
          <input
            className={classes.entries}
            name="Name"
            type="text"
            placeholder="LOCATION"
          />
        </div>
        <Button>FIND COACH</Button>
      </div>
      <div className={classes["horizontal-content-flex"]}>
        <div className={classes["welcome-quote"]}>
          LOREM IPSUM DOLOR SIT AMET
          <div className={classes["welcome-quote-small"]}>
            Lorem ipsum dolor sit amet. Vel placeat autem et debitis numquam 33
            delectus quod et totam voluptate. Quo blanditiis unde ut dolor
            expedita est quidem vitae.
          </div>
        </div>
        <Card>
          <img
            className={classes["netball-img"]}
            src={netball}
            alt="Netball icon"
          ></img>
          <div className={classes["card-title"]}>NETBALL</div>
          <div className={classes["card-quote"]}>
            Lorem ipsum dolor sit amet. Vel placeat autem et debitis numquam 33
            delectus quod
          </div>
          <Button variant="contained">SEE MORE</Button>
        </Card>
      </div>
    </div>
  );
}

export default Welcome;
