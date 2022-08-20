import classes from "./Header.module.css"

const headerStyle = {
    font: "Roboto",
    fontSize: 36,
    marginLeft: 50,
    fontWeight: "bold"

}
function Header() {
    return <div className={classes.header}>
        <h1 style={headerStyle}>COACHMATE</h1>
    </div>
}

export default Header;