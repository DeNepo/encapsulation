'use strict';

import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';
import { stepsList } from '../views/steps-list.js';

export const addStepper = () => {
  debugger;

  // read user input
  const newStepInput = document.getElementById('step-size').value;
  const newStep = Number(newStepInput);
  if (Number.isNaN(newStep)) {
    // this should never happen because the input is type number
    // but just in case
    return;
  }

  // update state
  numbers.steps.push(newStep);

  // re-render UI
  const stepsContainer = document.getElementById('steps-container');
  stepsContainer.innerHTML = '';
  const renderedStepsList = stepsList(numbers.steps);
  stepsContainer.appendChild(renderedStepsList);

  // log action for developers
  logger.add({
    handler: 'add stepper',
    newStep,
    renderedStepsList,
    numbers,
  });
};
