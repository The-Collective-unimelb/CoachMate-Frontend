import classes from "./Welcome.module.css";
import Card from "../UI/Card";
import netball from "./netball.png";

function Welcome() {
  return (
    <div className={classes["vertical-flex"]}>
      <div className={classes["horizontal-flex"]}>
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
        </Card>
      </div>
    </div>
  );
}

export default Welcome;
