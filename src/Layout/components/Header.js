/**
 * created by Sribalaji on 18/05/2018
 */

import React, { PureComponent } from "react";
import Logo from '../../../public/images/logo.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row header">
          <div className="col-md-2 col-sm-5 col-xs-6 logo-area" style={{paddingTop: 26}}>
              <img src={Logo} alt="Altimetric Inc" height="68" style={{overflow: 'hidden', width: 160, paddingTop: 0}} />
          </div>

          <div className="logoName col-md-9 col-sm-7 col-xs-12">
              <h2><b>{this.props.appName}</b></h2>
          </div>
        </div>
      </div>
    )
  }
}