'use strict';

import { logger } from '/lib/logger.js';

import './listeners.js';

import { state } from './data.js';
import { renderQuestions } from './views.js';

const quizContainer = document.getElementById('quiz');

// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = renderQuestions(state.questions);

logger.add({
  initialState: state,
});
