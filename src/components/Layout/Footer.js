import classes from "./Footer.module.css"
import coachmateSquare from "../../assets/CoachmateSquare.png"

function Footer() {
    return <div className={classes.footer}>
        <div className={classes.div1}>
            <a href='/' className={classes.h1}>HOME</a>
            <a href='/' className={classes.h1}>ABOUT US</a>
            <a href='/' className={classes.h1}>CONTACT</a>
        </div>
        <div className={classes.div2}>
            <div className={classes.div3}>
                <a className={classes.h1}>&copy; 2022 COACHMATE |&nbsp;</a>
                <a href='/' className={classes.h1}>TERMS &amp; CONDITIONS |&nbsp;</a>
                <a href='/' className={classes.h1}>PRIVACY POLICY |&nbsp;</a>
                <a href='/' className={classes.h1}>COOKIE POLICY</a>
            </div>
        </div>
        <div className={classes.div4}>
            <img className={classes["coachmate-square-logo"]} src={coachmateSquare}></img>
        </div>
    </div>
}

export default Footer;