import React, {useState} from "react";
import { CheckBox } from "@mui/icons-material";
import { TextField, Button, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

function LoginForm(props) {
    const [state, setState] = useState({
        role : 'Athlete',
        email : '',
        password : ''
    })

    
  /*const [checked, setChecked] = useState({
    rememberMe : false
  })*/
    
/*const handleChecked =() => {

    setChecked(!checked);
}*/

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    
        return (
            <div className={classes.loginForm}>
                <br/>
                <div className={classes.form}>
                <div className={classes.radioDiv}>
                    
                    
                    </div>
                    <input
                        name="role"
                        id={classes["athlete"]}
                        className={classes.athleteRadio}
                        type ="radio"
                        value ="Athlete"
                        onChange = {handleChange}
                        defaultChecked/>
                    <label for={classes["athlete"]} id={classes["athlete"]} className={classes.athleteLabel}>
                        
                        ATHLETE
                    </label>
                    <input
                        name="role"
                        id={classes["coach"]}
                        className={classes.coachRadio}
                        type ="radio"
                        value ="Coach"
                        onChange = {handleChange} />
                    <label for={classes["coach"]} id={classes["coach"]} className={classes.coachLabel}>
                        
                        COACH
                    </label>
                    
                <div className={classes.loginDetails}>
                    <TextField
                        className={classes.entries}
                        placeholder="EMAIL"
                        name="email"
                        type="email"
                        value = {state.email}
                        onChange = {handleChange} />
                    <br/>
                    <TextField
                        className={classes.entries}
                        placeholder="PASSWORD"
                        name="password"
                        type="password"
                        value={state.password}
                        onChange = {handleChange} />
                    <br/>
                    {/*<FormControlLabel control={
                        <CheckBox
                            checked={checked}
                            onChange={handleChecked} 
                          />}
                        label="REMEMBER ME"
                    />*/}
                </div>
                <br/>

                {/* <input type="submit" value="LOGIN" className={classes.submitBtn}/> */}

                {/* Link to dashboard temporarily */}
                <Link to="/coach-dashboard" className={classes.submitBtn}>LOGIN</Link>

                <div className={classes.createAccount}>
                    <p>DON'T HAVE AN ACCOUNT?
                    <Link to="/signup">CREATE AN ACCOUNT</Link>
                    </p>
                </div>
                </div>
            </div>
        )
    
        }

export default LoginForm;