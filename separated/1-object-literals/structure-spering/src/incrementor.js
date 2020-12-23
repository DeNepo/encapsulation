'use strict';

import { logger } from '/lib/logger.js';

export const incrementor = {
  // /**
  //  * @property {number} stepSize - how far to increment the
  //  */
  // state: {
  //   stepSize: 1,
  //   current: 0,
  // },

  // logic method
  increment: function() {
    const newCurrent = this.state.current + this.state.stepSize;
    this.state.current = newCurrent;
  },

  // view methods
  renderCurrent: function() {
    const li = document.createElement('li');
    li.innerHTML = this.state.current;
    return li;
  },
  renderStep: function() {
    const li = document.createElement('li');
    li.innerHTML = `... + ${this.state.stepSize} = ${this.state.current}`;
    return li;
  },

  // handler methods
  handleIncrement: function(listId) {
    debugger;
    // read user input
    this.increment();
    // update DOM from state
    const renderedStep = this.renderStep();
    document.getElementById(listId).appendChild(renderedStep);
    // log interaction
    logger.add({
      interaction: 'increment',
      renderedStep,
      state: this.state,
    });
  },
  handleSetStepSize: function(inputId) {
    debugger;
    // read user input
    const newStepSizeStr = document.getElementById(inputId).value;
    const newStepSize = Number(newStepSizeStr);
    // update state
    this.state.stepSize = newStepSize;
    // log interaction
    logger.add({
      interaction: 'set step size',
      newStepSize,
      state: this.state,
    });
  },
  handleReset: function(inputId, listId) {
    debugger;
    // reset state
    this.state.current = 0;
    this.state.stepSize = 1;
    // reset DOM
    document.getElementById(inputId).value = this.state.stepSize;
    const initialItem = this.renderCurrent();
    document.getElementById(listId).innerHTML = '';
    document.getElementById(listId).appendChild(initialItem);
    // log interaction
    logger.add({
      handler: 'reset',
      state: this.state,
    });
  },

  // initialization method
  init: function(inputId, listId) {
    debugger;

    // render initial dom from state
    document.getElementById(inputId).value = this.state.stepSize;
    const initialItem = this.renderCurrent();
    document.getElementById(listId).appendChild(initialItem);

    // log initial state
    logger.add({
      initialItem,
      initialState: this.state,
    });
  },
};
