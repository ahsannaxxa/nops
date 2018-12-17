import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormHelperText } from '@material-ui/core';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    fontFamily: 'Poppins, sans-serif',
  },
  outlined: {
    color: 'black',
  },
});

class BasicTextField extends React.Component {
  state = {
    name: '',
  };

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { classes, errorText, label, errorState, ...rest } = this.props;

    return (
      <div>
        <FormControl error={errorState} className={classes.formControl} variant="outlined">
          <InputLabel 
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined"
          >
            {label}
          </InputLabel>
          <OutlinedInput
            {...rest}
            id="component-outlined"
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
          <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(BasicTextField);