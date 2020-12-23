'use strict';

import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const incrementCurrent = event => {
  debugger;

  // read and process user input
  const inputString = event.target.value;
  const inputNumber = Number(inputString);
  if (Number.isNaN(inputNumber)) {
    return;
  }

  // update state
  numbers.past.push(numbers.current);
  numbers.current += inputNumber;

  // re-render UI from state
  document.getElementById('current-number').innerHTML = numbers.current;

  // log action for developers
  logger.add({
    handler: 'increment current',
    inputNumber,
    numbers,
  });
};
