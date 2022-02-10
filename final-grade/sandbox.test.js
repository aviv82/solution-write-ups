'use strict';

/**
 * Calculates a final grade based on set parameters.
 *
 * @param {number} [exam = 0] - The exam results.
 * @param {number} [projects = 0] - Number of projects completed.
 * @returns {number} Returns calculated final grade.
 * @example
 *
 * finalGrade(85, 5); //  90
 *
 * @example
 *
 * difference(55, 0); //  0
 */

// other's solutions

/*
function otherFinalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if ((exam > 75) & (projects >= 5)) return 90;
    if ((exam > 50) & (projects >= 2)) return 75;
    return 0;

finalGrade2 = (exam, projects) => {
        switch (true) {
          case exam > 90 || projects > 10:
            return 100;
            break;
          case exam > 75 && projects >= 5:
            return 90;
            break;
          case exam > 50 && projects >= 2:
            return 75;
            break;
          case exam <= 55 || projects <= 2:
            return 0;
            break;

         

function finalGrade(e, p) {
  return e > 90 || p > 10
    ? 100
    : e > 75 && p > 4
    ? 90
    : e > 50 && p > 1
    ? 75
    : 0;
}
            */

// my solution

/*

// first try inspired by first solution
const firstTry = (exam = 0, projects = 0) => {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects > 4) {
    return 90;
  }
  if (exam > 50 && projects > 1) {
    return 75;
  }
  return 0;
}; // works

*/

// second attempt; ternary inspired by third solution
const secondTry = (exam = 0, projects = 0) => {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects > 4
    ? 90
    : exam > 50 && projects > 1
    ? 75
    : 0;
}; // works

// i am not interested in refracting this function any more for reasons of readability
// what i do want to do is add some guards to prevent faulty info input

// unit testing

for (const solution of [secondTry]) {
  describe('calculates final grade according to set conditions', () => {
    describe('default parameters', () => {
      it('parameters are default should return 0', () => {
        expect(solution()).toEqual(0);
      });
    });
    describe('arguments are numbers', () => {
      describe('arguments are positive integer numbers', () => {
        describe('first argument is greater than 90', () => {
          it('100, 12 should return 100', () => {
            expect(solution(100, 12)).toEqual(100);
          });
          it('99, 0 should return 100', () => {
            expect(solution(99, 0)).toEqual(100);
          });
        });
        describe('second argument is greater than 10', () => {
          it('10, 15 should return 100', () => {
            expect(solution(10, 15)).toEqual(100);
          });
        });
        describe('first argument is greater than 75', () => {
          describe('first argument is greater than 75 and second argument is 5 or greater', () => {
            it('85, 5 should return 90', () => {
              expect(solution(85, 5)).toEqual(90);
            });
          });
          describe('first argument is greater than 75 and second argument is lesser than 5', () => {
            it('80, 3 should return 75', () => {
              expect(solution(80, 3)).toEqual(75);
            });
          });
        });
        describe('first argument is greater than 50', () => {
          describe('first argument is greater than 50 and second argument is 2 or greater', () => {
            it('55, 3 should return 75', () => {
              expect(solution(55, 3)).toEqual(75);
            });
          });
          describe('first argument is greater than 50 and second argument is lesser than 2', () => {
            it('60, 1 should return 0', () => {
              expect(solution(60, 1)).toEqual(0);
            });
          });
        });
        describe('first argument is lesser than 50', () => {
          describe('first argument is lesser than 50 and second argument is 10 or greater', () => {
            it('40, 11 should return 100', () => {
              expect(solution(40, 11)).toEqual(100);
            });
          });
          describe('first argument is lesser than 50 and second argument is lesser than 10', () => {
            it('30, 9 should return 0', () => {
              expect(solution(30, 9)).toEqual(0);
            });
          });
        });
      });
    });
  });
}
