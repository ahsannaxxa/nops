import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import BasicTextField from '../form/input';
import { Typography } from '@material-ui/core';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from '../../assets/theme';
import { withStyles } from "@material-ui/core/styles";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styleDialoge = theme => ({
    dialoge: {
        maxWidth: 800,
        width: '100%',
    },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DialogSlide extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
          <MuiThemeProvider theme={defaultTheme}>
            <Dialog classes={{paper: classes.dialoge}}
                open={this.props.open}
                
                TransitionComponent={Transition}
                keepMounted
                > 
                    <DialogTitle variant="h2">
                        {this.props.heading}
                    </DialogTitle>
                    <DialogContent>
                        {this.props.fname}
                        {this.props.lname}
                        {this.props.email}
                        {this.props.password}
                        {this.props.retypepassword}  
                        <Button onClick={this.props.close} color="secondary" variant="contained">
                        {this.props.button}
                        </Button>
                    </DialogContent>
            </Dialog>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styleDialoge)(DialogSlide);