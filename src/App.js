import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import LoginForm from './components/login/login';
import GeneralForm from './components/form/form';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from './assets/theme';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={defaultTheme}>
          <GeneralForm />
        </MuiThemeProvider>
    );
  }
}

export default App;
