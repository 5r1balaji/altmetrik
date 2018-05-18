/**
 * created by Sribalaji on 18/05/2018
 */

import React, { PureComponent } from "react";

export default class Dashboard extends PureComponent {
  render() {
    const {page, email, firstName, lastName} = this.props;
    return (
      <div className="container">
        {page === "login" && <h3>Welcome {email}</h3>}
        {page === "register" && <h3>{firstName} {lastName} your registeration is success</h3>}
      </div>
    )
  }
}