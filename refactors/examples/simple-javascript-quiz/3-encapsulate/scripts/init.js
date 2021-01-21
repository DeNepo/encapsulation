'use strict';

import './listeners.js';

import { app } from './app.js';

const quizContainer = document.getElementById('quiz');

// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = app.renderQuestions('results');
