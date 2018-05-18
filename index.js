/**
 * created by Sribalaji on 18/05/2018
 */

import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render(<App />, document.getElementById('app'));
