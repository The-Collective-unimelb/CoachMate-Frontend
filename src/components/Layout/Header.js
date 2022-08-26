import classes from "./Header.module.css";
import coachmateFlat from "./CoachmateFlat.png";

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes["coachmate-flat-logo"]} src={coachmateFlat}></img>
      <nav>
        <ul className={classes["flexbox-navbar-text"]}>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className={classes["login"]}>LOGIN</div>
    </div>
  );
}

export default Header;
