import React from "react";
import injectSheet from "react-jss";
import BasicTextField from "../form/input";
import PrimaryButton from "../buttons/primaryButton";
import { Typography } from "@material-ui/core";

const styles = {
  heading: {
    marginBottom: 25,
    marginTop: 15,
    textTransform: "capitalize"
  }
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      errorText: "",
      errorState: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (event, state) => {
      this.setState({
        [state]: event.target.value,
        errfNameState: false,
        errlNameState: false,
        errEmailState: false,
        errPasswordState: false,
        errRetypePasswordState: false,
        errfNameMessage: '',
        errlNameMessage: '',
        errEmailMessage: '',
        errPasswordMessage: '',
        errRetypePasswordMessage: '',
      });
  };
  handleSubmit(){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = RegExp(emailRegex);
    if(!this.state.firstName){
      this.setState({
        errfNameState: true,
        errfNameMessage: "Please enter your first name!",
      })
    }
    if(!this.state.lastName){
      this.setState({
        errlNameState: true,
        errlNameMessage: "Please enter your last name!",
      })
    }
    if(!this.state.email){
      this.setState({
        errEmailState: true,
        errEmailMessage: "Please enter your email!",
      })
    }
    else if(!regex.test(this.state.email)){
      this.setState({
        errEmailState: true,
        errEmailMessage: "Please enter valid email!",
      })
    }
    if(!this.state.password){
      this.setState({
        errPasswordState: true,
        errPasswordMessage: "Please enter password!",
      })
    }
    if(!this.state.retypePassword){
      this.setState({
        errRetypePasswordState: true,
        errRetypePasswordMessage: "Please retype password!",
      })
    }
    else if(!(this.state.password == this.state.retypePassword)){
      this.setState({
        errRetypePasswordState: true,
        errRetypePasswordMessage: "Please match the password!",
      })
    }
  };

  render() {
    const { classes } = this.props;
    const {errfNameState, errlNameState, errEmailState, errPasswordState, errRetypePasswordState, errfNameMessage, errlNameMessage, errEmailMessage, errPasswordMessage, errRetypePasswordMessage, firstName, lastName, email, password, retypePassword} = this.state;

    return (
      <div>
        <div>
          <Typography
            variant="h3"
            color="secondary"
            className={classes.heading}
          >
            Register
          </Typography>
          <BasicTextField
            label="First Name"
            name={firstName}
            value={firstName}
            type="text"
            onChange={event => this.handleInput(event, "firstName")}
            errorText={errfNameMessage}
            errorState={errfNameState}
          />
          <BasicTextField
            label="Last Name"
            name={lastName}
            value={lastName}
            type="text"
            onChange={event => this.handleInput(event, "lastName")}
            errorText={errlNameMessage}
            errorState={errlNameState}
          />
          <BasicTextField
            label="Email"
            name={email}
            value={email}
            type="email"
            onChange={event => this.handleInput(event, "email")}
            errorText={errEmailMessage}
            errorState={errEmailState}
          />
          <BasicTextField
            label="Enter Password"
            name={password}
            value={password}
            type="password"
            onChange={event => this.handleInput(event, "password")}
            errorText={errPasswordMessage}
            errorState={errPasswordState}
          />
          <BasicTextField
            label="Retype Password"
            name={retypePassword}
            value={retypePassword}
            type="password"
            onChange={event => this.handleInput(event, "retypePassword")}
            errorText={errRetypePasswordMessage}
            errorState={errRetypePasswordState}
          />
          <PrimaryButton children="Sign Up" variant="contained" handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SignUp);
