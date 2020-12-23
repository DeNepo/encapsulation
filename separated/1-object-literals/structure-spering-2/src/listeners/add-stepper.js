'use strict';

import { addStepper } from '../handlers/add-stepper.js';

document
  .getElementById('add-step-button')
  .addEventListener('click', addStepper);
