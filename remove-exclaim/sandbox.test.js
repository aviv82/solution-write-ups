'use strict';

// other's solutions
/*
function firstRemove(s) {
  while (s && s.slice(-1) == '!') {
    s = s.slice(0, -1);
  }
  return s;
} */

function secondRemove(s) {
  return s.replace(/!+$/, '');
}

const thirdRemove = (s) => s.replace(/!+$/, '');

// my solutions

function fourthRemove(s = '') {
  if (typeof s !== 'string') {
    throw new TypeError('input text is not a string');
  }
  return s.replace(/!+$/, '');
}

// provided test cases

// remove("Hi!") === "Hi" remove("Hi!!!") === "Hi" remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi" remove("Hi! Hi!") === "Hi! Hi" remove("Hi") === "Hi"

// write tests

for (const solution of [secondRemove, thirdRemove, fourthRemove]) {
  describe('remove end of sentence exclamation mark', () => {
    describe('default parameter is empty string', () => {
      it('default parameter is empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    describe('default parameter is string', () => {
      it('Hi! --> Hi', () => {
        expect(solution('Hi!')).toEqual('Hi');
      });
      it('Hi!!! --> Hi', () => {
        expect(solution('Hi!!!')).toEqual('Hi');
      });
      it('!Hi --> !Hi', () => {
        expect(solution('!Hi')).toEqual('!Hi');
      });
      it('Hi! Hi! --> Hi! Hi', () => {
        expect(solution('Hi! Hi!')).toEqual('Hi! Hi');
      });
      it('Hi! --> Hi', () => {
        expect(solution('Hi!')).toEqual('Hi');
      });
      it('Hi --> Hi', () => {
        expect(solution('Hi')).toEqual('Hi');
      });
    });
    describe('argument is not a string', () => {
      it('6 --> throw TypeError', () => {
        expect(() => solution(6)).toTrow(
          new TypeError('input text is not a string'),
        );
      });
    });
  });
}
