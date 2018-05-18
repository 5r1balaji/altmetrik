/**
 * created by Hemadri Dasari on 02/05/2018
 */

import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
              <div className="copyright">
                © 2018, Altimetric Inc
              </div>
            </div>
            <div className="col-xs-4 col-sm-6 col-md-6 col-lg-6">
              <div className="design">
                 <a target="_blank" href="https://www.altimetrik.com">Altimetric Inc</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}