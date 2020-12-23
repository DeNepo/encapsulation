// the program's Entry Point

'use strict';
debugger;

import { logger } from '/lib/logger.js';

import './listeners.js';

import { state } from './data.js';

const quizContainer = document.getElementById('quiz');

const output = [];

// for each question...
for (var i = 0; i < state.questions.length; i++) {
  const questionAnswers = [];

  // for each available answer...
  for (const letter in state.questions[i].answers) {
    // ...add an html radio button
    questionAnswers.push(
      '<label>' +
        '<input type="radio" name="question' +
        i +
        '" value="' +
        letter +
        '">' +
        letter +
        ': ' +
        state.questions[i].answers[letter] +
        '</label>'
    );
  }

  // add this question and its answers to the output
  output.push(
    '<div class="question">' +
      state.questions[i].question +
      '</div>' +
      '<div class="answers">' +
      questionAnswers.join('') +
      '</div>'
  );
}

// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('');

// log initial state
logger.add({
  initialState: state,
});
