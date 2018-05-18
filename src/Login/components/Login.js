/**
 * created by Sribalaji on 18/05/2018
 */

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import myTheme from '../../Common/Theme';
import Dashboard from '../../Dashboard/components/Dashboard';
import Signup from '../../Signup/components/Signup';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      passwordError:'',
      error: '',
      email: '',
      password: '',
      callDashBoard: false
    }; 
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);    
  }

  handleTouchTap(){
    if(this.state.email == '' || this.state.email == null){
      this.setState({
      emailError: "Email cannot be empty",
      passwordError: ''
    });
    }
    else if (!emailPattern.test(this.state.email) && this.state.email.length > 0) {
      this.setState({
        emailError: "Enter a valid email",
        passwordError: ''
      });
    }
    else if(this.state.password == '' || this.state.password == null){
      this.setState({
      emailError: '',
      passwordError: "Password cannot be empty"
    });
    }else{
      this.setState({
        callDashBoard: true
      })
           
    }
  };
  changeEmail(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
      emailError: "Email cannot be empty",
      passwordError: ''
    });
    }
    else if (!emailPattern.test(evt.target.value) && evt.target.value.length > 0) {
      this.setState({
        emailError: "Enter a valid email",
        passwordError: ''
      });
    }else{
      this.setState({
        emailError: '',
        passwordError: ''
      });
    }
    this.setState({
        email: evt.target.value
      });
  }
  changePassword(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
      emailError: "",
      passwordError: 'Password cannot be empty'
    });
    }else{
      this.setState({
        emailError: '',
        passwordError: ''
      });
    }
    this.setState({
        password: evt.target.value
      });
  }

  renderElements(){
    return(
        <div><h1>Login here</h1>  
            <TextField errorText={this.state.emailError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Email" hintText="Enter your email" value={this.state.email} onChange={this.changeEmail} name="email" /> 
            <br />
            <TextField errorText={this.state.passwordError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Password" hintText="Enter your password" value={this.state.password} onChange={this.changePassword} type="password" />
            <br />
            <br />
          <RaisedButton style={myTheme.buttonSimpleStyle} buttonStyle={myTheme.buttonStyle} type="submit" onClick={this.handleTouchTap}>
                    Signin
          </RaisedButton>
        </div>
    )
  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">             
        {this.state.callDashBoard ? <Dashboard page="login" email={this.state.email}/> : this.renderElements()}
        {this.state.callDashBoard && <Signup hide="yes" />}
      </div>
    );
  }
}
