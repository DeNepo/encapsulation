'use strict';

import { app } from './app.js';

document
  .getElementById('submit')
  .addEventListener('click', () => app.showResultsHandler());
