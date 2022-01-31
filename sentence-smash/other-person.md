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

- a solution that creates a new string variable for the sentence. it then
  applies a for loop that scrolls through the array and for every value checks
  if the value is the first in the sentence. if it is, it is concatenated
  without being preceded by spacing, otherwise it is concatenated with spacing

## implementation

- this solution applies a while loop where as long as the text contains an
  exclamation mark as the last character of its string the slice method will
  apply to edit out the last character

### function - explicit

### while loop - specifies the condition when the code should execute

### slice method - trims string value

## possible refractors

- instead of while loop could use a for loop to iterate through the text, either
  with an index or `const of`

## references

- learned more about
  [slice method](https://www.w3schools.com/jsref/jsref_slice_string.asp)

## second solution

```js
// Smash Words
function smash(words) {
  'use strict';
  return words.join(' ');
}
```

## strategy

- this solution foregoes the scroll through the text and simply gets rid of the
  exclamation marks all at once

## implementation

- the second solution uses a replace method instead of slice. instead of slicing
  out the exclamation mark it is replaced with an empty string

### function - explicit

### replace method- replaces all question marks in text at once with empty strings

## possible refractors

- this solution is already very short and optimized. i am not sure about the
  dollar sign and why it is there

## references

- learned more about dollar
  [sign in js](https://www.thoughtco.com/and-in-javascript-2037515)

## third solution

```js
let smash = (words) => words.join(' ');
```

## strategy

- another replace method solution but even more optimized

## implementation

- instead of using an explicit function third solution completes the task in a
  single expression

### function - implicit

### replace method- replaces all question marks in text at once with empty strings

## possible refractors

- i cant imagine how this code can be any more economic and still work

## references

- better understanding of
  [implicit vs. explicit](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript/)
