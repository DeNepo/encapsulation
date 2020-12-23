'use strict';

import { logger } from '/lib/logger.js';

import { state } from './data.js';
import { renderResults } from './views.js';

export const showResultsHandler = () => {
  debugger;

  // -- gather and process user input --
  //  query input containers
  const quizContainer = document.getElementById('quiz');
  const answerContainers = quizContainer.querySelectorAll('.answers');
  //  read individual answers from DOM
  const answers = [];
  for (let i = 0; i < answerContainers.length; i++) {
    const answerContainer = answerContainers[i];
    const answerInput =
      answerContainer.querySelector('input[name=question' + i + ']:checked') ||
      {};
    const answer = answerInput.value;
    answers.push(answer);
  }
  //  calculate new score
  let newNumCorrect = 0;
  for (let i = 0; i < state.questions.length; i++) {
    if (answers[i] === state.questions[i].correctAnswer) {
      newNumCorrect++;
    }
  }

  // -- update state with new user answers --
  state.userAnswers = answers;
  state.numCorrect = newNumCorrect;

  // -- update UI to show correct/incorrect --
  //  set the color for each answer
  for (let i = 0; i < state.questions.length; i++) {
    if (state.userAnswers[i] === state.questions[i].correctAnswer) {
      answerContainers[i].style.color = 'lightgreen';
    } else {
      answerContainers[i].style.color = 'red';
    }
  }
  //  show number of correct answers out of total
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = renderResults(
    state.numCorrect,
    state.questions.length
  );

  logger.add({
    handler: 'show results',
    state,
  });
};
