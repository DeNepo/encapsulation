'use strict';

import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const resetHandler = () => {
  // reset state
  numbers.current = 0;
  numbers.past = [];
  numbers.steps = [];

  // reset UI
  document.getElementById('current-number').innerHTML = numbers.current;
  document.getElementById('step-size').value = 1;
  document.getElementById('steps-container').innerHTML = '';

  // log user interaction
  logger.add({
    handler: 'reset',
    numbers,
  });
};
