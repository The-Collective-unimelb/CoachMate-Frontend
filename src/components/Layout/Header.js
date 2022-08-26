import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import coachmateFlat from "./CoachmateFlat.png";

function Header() {
  return (
    <div className={classes.header}>
      <img
        className={classes["coachmate-flat-logo"]}
        src={coachmateFlat}
        alt="coachmate logo"
      ></img>
      <nav>
        <ul className={classes["flexbox-navbar-text"]}>
          <li>
            <Link to="/">COACHMATE</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <Link to="/login" className={classes["login"]}>
        LOGIN
      </Link>
    </div>
  );
}

export default Header;
