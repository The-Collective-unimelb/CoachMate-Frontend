import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import coachmateFlat from "../../assets/CoachmateFlat.png";

function Header() {
  return (
    <div className={classes.header}>
      <nav>
        <Link to="/">
          <img
            className={classes.logo}
            src={coachmateFlat}
            alt="coachmate logo"
          />
        </Link>
        <ul className={classes.link}>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/login" className={classes["login"]}>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
