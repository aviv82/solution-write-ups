/* eslint-disable prefer-arrow/prefer-arrow-functions */

'use strict';

// other's solutions

function smash1(words) {
  var smashed = '';
  for (var i = 0; i < words.length; i++) {
    smashed += words[i];
    if (i != words.length - 1) {
      smashed += ' ';
    }
  }
  return smashed;
}

function smash2(words) {
  return words.join(' ');
}

let smash3 = (words) => words.join(' ');

// my solutions

// eslint-disable-next-line no-unused-vars
function smash4(words = []) {
  if (!Array.isArray(words)) {
    throw new TypeError('input words is not an array');
  } else if (
    words.forEach((isString) => {
      return typeof isString !== 'string';
    })
  ) {
    throw new TypeError('array is not array of strings');
  }
  return words.join(' ');
}

// provided test cases

// ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

// ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

// write tests

for (const solution of [smash1, smash2, smash3]) {
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
