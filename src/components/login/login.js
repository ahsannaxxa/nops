import React from "react";
import BasicTextField from "../form/input";
import injectSheet from "react-jss";
import PrimaryButton from "../buttons/primaryButton";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from "../../assets/theme";
import styleLogin from "./styleLogin";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      email: '',
      password: '',
      errorText: "",
      errorState: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput = (event, state) => {
    this.setState({
        [state]: event.target.value,
        errEmailState: false,
        errEmailMessage: "",
        errPasswordState: false,
        errPasswordMessage: "",
    });
  };
  handleSubmit(){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = RegExp(emailRegex);
      if(!this.state.email){
          this.setState({
            errEmailState: true,
            errEmailMessage: "Please enter your emial!",
          });
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
            errPasswordMessage: "Please enter your password!"
          });
      }
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const {email, password, errEmailMessage, errPasswordMessage, errEmailState, errPasswordState} = this.state;

    return (
      <MuiThemeProvider theme={defaultTheme}>
        <BasicTextField
          label="Enter Email"
          name={email}
          type="email"
          password={password}
          onChange={event => this.handleInput(event, "email")}
          errorState={errEmailState}
          errorText={errEmailMessage}
        />
        <BasicTextField
          label="Enter Password"
          name={password}
          type="password"
          value={password}
          onChange={event => this.handleInput(event, "password")}
          errorState={errPasswordState}
          errorText={errPasswordMessage}
        />
        <div className={classes.links}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleChange("checked")}
                value="checked"
              />
            }
            label="Remember me"
          />
          <div className={classes.forgetPs}>
            <a>Forget Password?</a>
          </div>
          <div className={classes.clear} />
        </div>
        <PrimaryButton children="Login" variant="contained" handleSubmit={this.handleSubmit} />
      </MuiThemeProvider>
    );
  }
}

export default injectSheet(styleLogin)(LoginForm);
