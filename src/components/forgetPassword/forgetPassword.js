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

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errorState: false,
      errorText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (event, state) => {
    this.setState({
      [state]: event.target.value,
      errEmailState: false,
      errEmailMessage: ""
    });
  };

  handleSubmit(){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = RegExp(emailRegex);
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
  };

  render() {
    const { classes } = this.props;
    const { email, errEmailState, errEmailMessage } = this.state;

    return (
      <div>
        <div>
          <Typography
            variant="h3"
            color="secondary"
            className={classes.heading}
          >
            Forget Password
          </Typography>
          <BasicTextField
            label="Enter Email"
            type="email"
            name={email}
            value={email}
            onChange={event => this.handleInput(event, "email")}
            errorText={errEmailMessage}
            errorState={errEmailState}
          />
          <PrimaryButton children="Reset Password" variant="contained" handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ForgetPassword);
