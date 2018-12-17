import React from 'react';
import injectSheet from 'react-jss';
import BasicTextField from '../form/input';
import PrimaryButton from '../buttons/primaryButton';
import { Typography } from '@material-ui/core';

const styles = ({
    heading:{
      marginBottom: 25,
      marginTop: 15,
      textTransform: 'capitalize',
    }
});

class ChangePassword extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        errorText: "",
        errorState: false,
        oldPassword: '',
        newPassword: '',
        retypePassword: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (event, state) =>{
    this.setState({
      errOldMessage: "",
      errOldState: false,
      errNewMessage: "",
      errNewState: false,
      errRetypeMessage: "",
      errRetypeState: false,
      [state]: event.target.value,

    })
  }

  handleSubmit() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = RegExp(emailRegex);
    if(!this.state.oldPassword){
      this.setState({
        errOldState: true,
        errOldMessage: "Please enter old password!",
      })
    }
    else if(!regex.test(this.state.oldPassword)){
      this.setState({
        errOldState: true,
        errOldMessage: "Please enter valid email!",
      })
    }
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
    const { oldPassword, newPassword, retypePassword, errOldMessage, errNewMessage, errRetypeMessage, errOldState, errNewState, errRetypeState } = this.state;

    return (
      <div>
        <div>
            <Typography variant="h3" color="secondary" className={classes.heading}>Change Password</Typography>
            <BasicTextField label="Enter Old Password" name="oldPassword" errorState={errOldState} errorText={errOldMessage} type="password" value={oldPassword} onChange={event => this.handleInput(event, "oldPassword")} />
            <BasicTextField label="Enter New Password" name="newPassword" errorState={errNewState} errorText={errNewMessage} type="password" value={newPassword} onChange={event => this.handleInput(event, "newPassword")} />
            <BasicTextField label="Retype New Password" name="retypePassword" errorState={errRetypeState} errorText={errRetypeMessage} type="password" value={retypePassword} onChange={event => this.handleInput(event, "retypePassword")} />  
            <PrimaryButton children="Change Password" variant="contained" handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ChangePassword);