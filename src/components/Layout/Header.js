import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h1>COACHMATE</h1>
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
