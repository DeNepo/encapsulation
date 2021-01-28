'use strict';

import { logger } from '../../../../../lib/logger.js';

export const app = {
  state: {
    numCorrect: 0,
    userAnswers: [],
    questions: [
      {
        question: 'What is 10/2?',
        answers: {
          a: '3',
          b: '5',
          c: '115',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What is 30/3?',
        answers: {
          a: '3',
          b: '5',
          c: '10',
        },
        correctAnswer: 'c',
      },
    ],
  },

  // view methods
  renderQuestions: function() {
    const output = [];

    // for each question...
    for (var i = 0; i < this.state.questions.length; i++) {
      const questionAnswers = [];

      // for each available answer...
      for (const letter in this.state.questions[i].answers) {
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
            this.state.questions[i].answers[letter] +
            '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          this.state.questions[i].question +
          '</div>' +
          '<div class="answers">' +
          questionAnswers.join('') +
          '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    return output.join('');
  },
  renderResults: function() {
    return this.state.numCorrect + ' out of ' + this.state.questions.length;
  },

  // handler method
  showResultsHandler: function() {
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
        answerContainer.querySelector(
          'input[name=question' + i + ']:checked'
        ) || {};
      const answer = answerInput.value;
      answers.push(answer);
    }
    //  calculate new score
    let newNumCorrect = 0;
    for (let i = 0; i < this.state.questions.length; i++) {
      if (answers[i] === this.state.questions[i].correctAnswer) {
        newNumCorrect++;
      }
    }

    // -- update state with new user answers --
    this.state.userAnswers = answers;
    this.state.numCorrect = newNumCorrect;

    // -- update UI to show correct/incorrect --
    //  set the color for each answer
    for (let i = 0; i < this.state.questions.length; i++) {
      if (this.state.userAnswers[i] === this.state.questions[i].correctAnswer) {
        answerContainers[i].style.color = 'lightgreen';
      } else {
        answerContainers[i].style.color = 'red';
      }
    }
    //  show number of correct answers out of total
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = this.renderResults();

    logger.add({
      handler: 'show results',
      state: this.state,
    });
  },

  init: function(containerId) {
    const quizContainer = document.getElementById(containerId);

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = this.renderQuestions();
  },
};
