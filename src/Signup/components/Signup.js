/**
 * created by Sribalaji on 18/05/2018
 */

import React, { Component } from 'react';
import myTheme from '../../Common/Theme';
import moment from 'moment';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dashboard from '../../Dashboard/components/Dashboard';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pwdPattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export default class Register extends Component {
  constructor(props) {
    super(props);
    const dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);
    this.state = {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
      genderError:'',
      dobError:'',
      firstName: '',
      lastName: '',
      password: '',
      sex: '',
      openError: false,
      openSuccess: false,
      dob: null,
      dateYesterday: dateYesterday,
      completed: 0,
      callDashboard: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeDateOfBirth = this.changeDateOfBirth.bind(this);
    this.changeSex = this.changeSex.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
  }

handleTouchTap(){
    
  if(this.state.firstName == '' || this.state.firstName == null){
      this.setState({
      firstNameError: "First name cannot be empty"
    });
    }
    else if(this.state.lastName == '' || this.state.lastName == null){
      this.setState({
      lastNameError: "Last name cannot be empty"
    });
    }
    else if(this.state.email == '' || this.state.email == null){
      this.setState({
      emailError: "Email cannot be empty"
    });
    }
    else if (!emailPattern.test(this.state.email) && this.state.email.length > 0) {
      this.setState({
        emailError: "Enter a valid email"
      });
    }
    else if (!this.state.password.match(pwdPattern) && this.state.password.length > 0) {
      this.setState({
        passwordError: "Password should contain 1 lowercase, 1 uppercase letter, 1 numeric digit, and 1 special character"
      });
    }
    else if(this.state.password == '' || this.state.password == null){
      this.setState({
      passwordError: "Password cannot be empty"
    });
    }
    else if(this.state.sex == '' || this.state.sex == null){
      this.setState({
      genderError: "Please select your gender"
    });
    }else if(this.state.dob == null || this.state.sex == undefined){
      this.setState({
      dobError: "Please select your Date Of Birth"
    });
    }else{
      this.setState({
        callDashboard: true
      });
    }
  };
  
    
  changeDateOfBirth(evt, date){
    if(date == null || date == undefined){
      this.setState({
        passwordError: "",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: 'Please select your date of birth'
      });
    }else{
      this.setState({
        passwordError: "",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    this.setState({
        dob: date
      });
  }
  changeEmail(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
      emailError: "Email cannot be empty",
      passwordError: '',
      firstNameError:'',
      lastNameError:'',
      genderError: '',
      dobError: ''

    });
    }
    else if (!emailPattern.test(evt.target.value) && evt.target.value.length > 0) {
      this.setState({
        emailError: "Enter a valid email",
        passwordError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
      dobError: ''
      });
    }else{
      this.setState({
        emailError: '',
        passwordError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    this.setState({
        email: evt.target.value
      });
  }

  changeFirstName(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        firstNameError: "First name cannot be empty",
        emailError: '',
        passwordError: '',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }else{
      this.setState({
        firstNameError: "",
        emailError: '',
        passwordError: '',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    this.setState({
        firstName: evt.target.value
      });
  }

  changeLastName(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        lastNameError: "Last name cannot be empty",
        emailError: '',
        passwordError: '',
        firstNameError:'',
        genderError: '',
        dobError: ''
      });
    }else{
      this.setState({
        lastNameError: "",
        emailError: '',
        passwordError: '',
        firstNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    this.setState({
        lastName: evt.target.value
      });
  }
  changePassword(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
      passwordError: "Password cannot be empty",
      emailError: '',
      firstNameError:'',
      lastNameError:'',
      genderError: '',
      dobError: ''
    });
    }else if (!evt.target.value.match(pwdPattern) && evt.target.value.length > 0) {
      this.setState({
        passwordError: "Password should contain 1 lowercase, 1 uppercase letter, 1 numeric digit, and 1 special character",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }else{
      this.setState({
        passwordError: "",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    
    this.setState({
        password: evt.target.value
      });
  }

  changeSex(evt){
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        passwordError: "",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: 'Please select your gender',
        dobError: ''
      });
    }else{
      this.setState({
        passwordError: "",
        emailError: '',
        firstNameError:'',
        lastNameError:'',
        genderError: '',
        dobError: ''
      });
    }
    this.setState({
        sex: evt.target.value
      });
  }

    renderElements(){
      return (
        <div>
          <h1>Create an account</h1> 
            <h3>It's free and always will be!</h3>  
            <TextField errorText={this.state.firstNameError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} underlineFocusStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="First name" hintText="Enter your first name" value={this.state.firstName} onChange={this.changeFirstName} name="firstName" />
            <br />
            <TextField errorText={this.state.lastNameError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} underlineFocusStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Last name" hintText="Enter your lastname" value={this.state.lastName} onChange={this.changeLastName} name="lastName" />
            <br />
            <TextField errorText={this.state.emailError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} underlineFocusStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Email" hintText="Enter your email" value={this.state.email} onChange={this.changeEmail} name="email" /> 
            <br />
          <TextField errorText={this.state.passwordError} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} underlineFocusStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Password" hintText="Enter your password" value={this.state.password} onChange={this.changePassword} type="password" />
          <br />
        <RadioButtonGroup name="gender" style={{ marginTop: 20, display: 'flex' }} onChange={this.changeSex}>
          <RadioButton
            value='male'
            name="male"
            label='Male'
            style={{ width: 'auto', marginRight: '15px' }}
            labelStyle={myTheme.labelStyle}
            inputStyle={myTheme.inputStyle}
            iconStyle={myTheme.iconStyle}
            />
          <RadioButton
            value='female'
            label='Female'
            name='female'
            style={{ width: 'auto' }}
            labelStyle={myTheme.labelStyle}
            inputStyle={myTheme.inputStyle}
            iconStyle={myTheme.iconStyle}
            />
        </RadioButtonGroup>
          <DatePicker dialogContainerStyle={{position: 'absolute'}} errorText={this.state.dobError} errorStyle={myTheme.errorStyle} inputStyle={myTheme.inputStyleText} underlineStyle={myTheme.underlineStyle} underlineFocusStyle={myTheme.underlineStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Date Of Birth" hintText="Select Date Of Birth" container="inline" locale="en-US" firstDayOfWeek={0} autoOk={true} value={this.state.dob} onChange={this.changeDateOfBirth} defaultDate={this.state.dateYesterday}
          >
          </DatePicker>
          <br />
          <RaisedButton style={myTheme.buttonSimpleStyle} buttonStyle={myTheme.buttonStyle} type="submit" onClick={this.handleTouchTap}>
                    Signup
          </RaisedButton>
        </div>
      )
    }
  render() {
    let DateTimeFormat;
    console.log('hide', this.props.hide)
    return (
          <div>
            {this.props.hide != "yes" && this.state.callDashboard && <Dashboard page="register" firstName={this.state.firstName} lastName={this.state.lastName}/>}
            {this.props.hide == "yes" ? "" : this.renderElements()}
          </div>
    );
  }
}

