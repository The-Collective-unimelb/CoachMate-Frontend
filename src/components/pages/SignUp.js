import React from "react";
import { useState } from "react";
import classes from "./Signup.module.css";

import { TextField} from "@mui/material";

function SignUpForm(props){
    const [state, setState] = useState({
        
        role : 'Athlete',
        firstName : '',
        lastName : '',
        phone : '',
        email : '',
        password : '',
        confirmPassword : ''
    })
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    

        return (
            <div className={classes.loginForm}>
                <div className={classes.form}>
                <div className={classes.radioDiv}>
                    <p>blahblha

                    </p>
                    <br/>
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
                        
                        Athlete
                    </label>
                    <input
                        name="role"
                        id={classes["coach"]}
                        className={classes.coachRadio}
                        type ="radio"
                        value ="Coach"
                        onChange = {handleChange} />
                    <label for={classes["coach"]} id={classes["coach"]} className={classes.coachLabel}>
                        
                        Coach
                    </label>
                    
                <div className={classes.loginDetails}>
                <h3>SIGN UP</h3>
                    <TextField
                        className={classes.entries}
                        placeholder="FIRST NAME"
                        name="firstName"
                        type="text"
                        value = {state.firstName}
                        onChange = {handleChange} />
                    <br/>
                    <TextField
                        className={classes.entries}
                        placeholder="LAST NAME"
                        name="lastNAME"
                        type="text"
                        value = {state.lastName}
                        onChange = {handleChange} />
                    <br/>
                    <TextField
                        className={classes.entries}
                        placeholder="PHONE NUMBER"
                        name="phone"
                        type="tel"
                        value = {state.phone}
                        onChange = {handleChange}/>
                    <br/>
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
                    <TextField
                        className={classes.entries}
                        placeholder="CONFIRM PASSWORD"
                        name="confirmPassword"
                        type="password"
                        value={state.confirmPassword}
                        onChange = {handleChange} />
                    <br/>
                </div>
                <br/>
                <input type="submit" value="SIGN UP" className={classes.submitBtn}/>

                </div>
                </div>
        )
    }

export default SignUpForm;