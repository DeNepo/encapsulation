// this is your app's Entry Point
// the first file to be executed

'use strict';
debugger;

import { state } from './data.js';
import { incrementor } from './incrementor.js';

// set the data in your app
incrementor.state = state;

// initialize the app
incrementor.init('step-size-input', 'steps-history');

// attach event listeners
