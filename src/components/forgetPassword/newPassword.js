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

class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        newPassword: '',
        retypePassword: '',
        errorState: false,
        errorText: ""
    }
    // this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (event, state) => {
    this.setState({
      [state]: event.target.value,
      errNewState: false,
      errNewMessage: "",
      errRetypeState: false,
      errRetypeMessage: ""
    });
  };
  // handleBlur(event) { 
  //   if (!event.currentTarget.value) {
  //     this.setState({
  //       passwordError: true,
  //       passwordErrorMsg: "Pagal insaan input ku bharo"
  //     });
  //   }
  // }
  handleSubmit() {
    if(!this.state.newPassword){
      this.setState({
        errNewState: true,
        errNewMessage: "Please enter New password!",
      })
    }
    if(!this.state.retypePassword){
      this.setState({
        errRetypeState: true,
        errRetypeMessage: "Please reType New password!",
      })
    }
    else if(!(this.state.newPassword == this.state.retypePassword)){
      this.setState({
        errRetypeState: true,
        errRetypeMessage: "Please match the password!",
      })
    }
    else{

    }
  }

  render() {
    const { classes } = this.props;
    const { newPassword, retypePassword, errNewState, errRetypeState, errNewMessage, errRetypeMessage} = this.state;

    return (
      <div>
        <div>
          <Typography
            variant="h3"
            color="secondary"
            className={classes.heading}
          >
            New Password
          </Typography>
          <BasicTextField
            label="Enter New Password"
            name={newPassword}
            type="password"
            value={newPassword}
            onChange={event => this.handleInput(event, "newPassword")}
            errorState={errNewState}
            errorText={errNewMessage}
          />
          <BasicTextField
            label="Retype New Password"
            name={retypePassword}
            type="password"
            value={retypePassword}
            onChange={event => this.handleInput(event, "retypePassword")}
            errorState={errRetypeState}
            errorText={errRetypeMessage}
          />
          <PrimaryButton children="Submit" variant="contained" handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(NewPassword);