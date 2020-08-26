'use strict';

// psst, be sure to use JS Tutor or Debugger!
//  (challenge)

const searchable = {
  state: {
    query: '',
    matching: [],
    all: [],
  },
  addWord: function (newWord) {
    this.state.all.push(newWord);
    const newMatching = this.findAllMatching();
    this.state.matching = newMatching;
  },
  setQuery: function (newQuery) {
    this.state.query = newQuery;
    const newMatching = this.findAllMatching();
    this.state.matching = newMatching;
  },
  findAllMatching: function () {
    const query = this.state.query;
    const isMatching = string => string.includes(query);
    const matchingEntries = this.state.all.filter(isMatching);
    return matchingEntries;
  }
};


const allLength1 = searchable.all.length === 0;
const matchingLength1 = searchable.matching.length === 0;
console.assert(allLength1 && matchingLength1, 'Test 1');

searchable.addWord('hi!');
searchable.addWord('hi');
const allLength2 = searchable.all.length === 2;
const matchingLength2 = searchable.matching.length === 2;
console.assert(allLength2 && matchingLength2, 'Test 2');

searchable.setQuery('!');
const allLength3 = searchable.all.length === 2;
const matchingLength3 = searchable.matching.length === 1;
console.assert(allLength3 && matchingLength3, 'Test 3');

searchable.addWord('hi?');
const allLength4 = searchable.all.length === 3;
const matchingLength4 = searchable.matching.length === 1;
console.assert(allLength4 && matchingLength4, 'Test 4');

searchable.setQuery('hi');
const allLength5 = searchable.all.length === 3;
const matchingLength5 = searchable.matching.length === 3;
console.assert(allLength5 && matchingLength5, 'Test 5');

searchable.setQuery('bye');
const allLength6 = searchable.all.length === 3;
const matchingLength6 = searchable.matching.length === 0;
console.assert(allLength6 && matchingLength6, 'Test 6');

