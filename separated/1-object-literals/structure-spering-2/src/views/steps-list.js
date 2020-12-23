'use strict';

import { incrementCurrent } from '../handlers/increment.js';

export const stepsList = (stepSizes = []) => {
  const ul = document.createElement('ul');

  for (const stepSize of stepSizes) {
    const input = document.createElement('input');
    input.value = stepSize;
    input.type = 'button';
    input.addEventListener('click', incrementCurrent);

    const li = document.createElement('li');
    li.appendChild(input);
    ul.appendChild(li);
  }

  return ul;
};
