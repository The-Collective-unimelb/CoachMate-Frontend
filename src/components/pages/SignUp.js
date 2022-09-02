import React from "react";
import classes from "./Signup.module.css";

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            role : 'Athlete',
            firstName : '',
            lastName : '',
            phone : '',
            email : '',
            password : '',
            confirmPassword : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(){
        if (this.state.password.localeCompare(this.state.confirmPassword) != 0){
            alert("Passwords don't match");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={classes.loginForm}>
                <br/>
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
                        onChange = {this.handleChange}
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
                        onChange = {this.handleChange} />
                    <label for={classes["coach"]} id={classes["coach"]} className={classes.coachLabel}>
                        
                        Coach
                    </label>
                    
                <div className={classes.loginDetails}>
                <h3>SIGN UP</h3>
                    <input
                        className={classes.entries}
                        placeholder="FIRST NAME"
                        name="firstName"
                        type="text"
                        value = {this.state.firstName}
                        onChange = {this.handleChange} />
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="LAST NAME"
                        name="lastNAME"
                        type="text"
                        value = {this.state.lastName}
                        onChange = {this.handleChange} />
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="PHONE NUMBER"
                        name="phone"
                        type="tel"
                        value = {this.state.phone}
                        onChange = {this.handleChange}/>
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="EMAIL"
                        name="email"
                        type="email"
                        value = {this.state.email}
                        onChange = {this.handleChange} />
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="PASSWORD"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange = {this.handleChange} />
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="CONFIRM PASSWORD"
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange = {this.handleChange} />
                    <br/>
                </div>
                <br/>
                <input type="submit" value="SIGN UP" className={classes.submitBtn}/>

                </div>
            </form>
        )
    }
}
export default SignUpForm;