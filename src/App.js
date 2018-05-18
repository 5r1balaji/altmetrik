/**
 * created by Sribalaji on 18/05/2018
 */

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { white } from "material-ui/styles/colors";
import Header from './Layout/components/Header';
import Footer from './Layout/components/Footer';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from "material-ui/IconButton";
import Login from './Login/components/Login';
import Signup from './Signup/components/Signup';

const buttonStyle = {
  color: "#333"
};

const muiTheme = getMuiTheme({
  card: {
    titleColor: white,
    subtitleColor: white,
    fontWeight: "bold",
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  renderHeader(){
    return (
      <header>
        <Header appName="Altimetric Sample App"/>
      </header>
    )
  }

  renderFooter(){
    return (
       <footer>
          <Footer />
        </footer>
    )
  }

  renderElements(){
    return (
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <Login />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <Signup hide="no"/>
        </div>
      </div>
    )
  }

  renderStatus(){
    return (
      <div className="container">
          {this.renderElements()}
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          {this.renderHeader()}
          {this.renderStatus()}  
          {this.renderFooter()}
        </div>
      </MuiThemeProvider>
    );
  }
}
