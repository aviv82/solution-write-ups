# solutions

## first solution

```js
// Smash Words
function smash(words) {
  'use strict';
  var smashed = '';
  for (var i = 0; i < words.length; i++) {
    smashed += words[i];
    if (i != words.length - 1) {
      smashed += ' ';
    }
  }
  return smashed;
}
```

## strategy

- a solution that creates a new sentence. it then applies an iteration that
  scrolls through the array and for every value checks if the value is the last
  in the sentence. if it is, it is added without being followed by spacing,
  otherwise it is added with spacing

## implementation

- this solution creates a new string variable for the sentence. it then applies
  a for loop that scrolls through the array. for every indexed value it checks
  if the value is the last in the sentence by comparing its index to the length
  of the array minus one. if it is, it is concatenated without being followed by
  spacing, otherwise it is concatenated with spacing

### function - explicit

### for loop - iterates for every indexed value in the array

### if condition - checks if concatenated value is last in order

## possible refractors

- use let/const instead of var

- instead of for loop could maybe use forEach method

- if condition could be written as ternary

## references

- learned more about using
  ['use strict' in a function](https://www.tutorialspoint.com/in-javascript-why-do-we-use-use-strict)

## second solution

```js
// Smash Words
function smash(words) {
  'use strict';
  return words.join(' ');
}
```

## strategy

- this solution adds the words in the array together into a sentence with
  spacing between the words

## implementation

- this solution applies a join method to concatenate array values into a string
  and concatenates spacing between the values

### function - explicit

### join method - concatenates values in an array with spacing between values

## possible refractors

- this solution is already very short and optimized. function could probably be
  written as implicit

## references

- learned more about using
  [array join method](https://www.w3schools.com/jsref/jsref_join.asp)

## third solution

```js
let smash = (words) => words.join(' ');
```

## strategy

- another join method solution but even more optimized

## implementation

- instead of using an explicit function third solution completes the task in a
  single expression

### function - implicit

### join method - concatenates values in an array with spacing between values

## possible refractors

- i cant imagine how this code can be any more economic and still work

- could maybe benefit from some guards

## references

- better understanding of
  [implicit vs. explicit](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript/)
