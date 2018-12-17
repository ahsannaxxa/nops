import React from 'react';
import injectSheet from 'react-jss';
import Logo from '../img/nops-Logo.svg';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from '../../assets/theme';
import styleForm from './styleForm';
import LoginForm from '../login/login';
import ForgetPassword from '../forgetPassword/forgetPassword';
import ChangePassword from '../changePassword/changePassword';
import SignUp from '../register/register';
import NewPassword from '../forgetPassword/newPassword';

class GeneralForm extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        checked: true,
      };
  }
  handleInput=(data)=>{
    console.log(data)
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
        <MuiThemeProvider theme={defaultTheme}>
            <div className={classes.container}>
                <div className={classes.LoginForm}>
                    <img src={Logo} className={classes.logo}></img>
                    <SignUp />
                </div>
                <div className={classes.signUpLink}>
                    Don't have an account yet ?<span>Sign Up</span>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default injectSheet(styleForm)(GeneralForm);