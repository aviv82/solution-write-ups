'use strict';

// other's solutions
/*
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
*/
// my solutions

// the function below does not pass tests
/*
const smash4 = (words = []) => {
  if (!Array.isArray(words)) {
    throw new TypeError('input words is not an array');
  } else if (
    words.forEach((isString) => {
      console.log(isString);
      return typeof isString === 'string';
    })
  ) {
    throw new TypeError('array is not string array');
  }
  return words.join(' ');
};
*/
// different approach, instead of forEach() use for loop

const smash5 = (words = []) => {
  if (!Array.isArray(words)) {
    throw new TypeError('argument is not array');
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (typeof words[i] !== 'string') {
      throw new TypeError('array is not array of strings');
    }
  }
  return words.join(' ');
}; // works!

// provided test cases

// ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great.'

// ['call', 'me', 'by', 'your', 'name.'] => 'call me by your name.'

// write tests

for (const solution of [smash5]) {
  describe('concatenate values in array to a sentence string', () => {
    describe('default parameter is empty array', () => {
      it('default parameter returns empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    describe('argument is an empty array', () => {
      it('empty array should return empty string', () => {
        expect(solution([])).toEqual('');
      });
      describe('argument is an array', () => {
        describe('argument is an array of strings', () => {
          it('["go", "deliver", "a", "dare", "vile", "dog."] should return string sentence with spacing', () => {
            expect(
              solution(['go', 'deliver', 'a', 'dare', 'vile', 'dog.']),
            ).toEqual('go deliver a dare vile dog.');
          });
          it('["go", "go", "power", "rangers."] should return string sentence with spacing', () => {
            expect(solution(['go', 'go', 'power', 'rangers.'])).toEqual(
              'go go power rangers.',
            );
          });
          describe('argument is an array of numbers', () => {
            it('[4, 87, 91] should throw a type error', () => {
              expect(() => solution([4, 87, 91])).toThrow(
                new TypeError('array is not array of strings'),
              );
            });
            describe('argument is an array of mixed values', () => {
              it('["gone", 7, false, NaN, undefined, null, "4"] should throw a type error', () => {
                expect(() =>
                  solution(['gone', 7, false, NaN, undefined, null, '4']),
                ).toThrow(new TypeError('array is not an array of strings'));
              });
            });
          });
          describe('argument is not an array', () => {
            it('"tell me lies" --> throw TypeError', () => {
              expect(() => solution('tell me lies')).toThrow(
                new TypeError('argument is not an array'),
              );
            });
          });
        });
      });
    });
  });
}
