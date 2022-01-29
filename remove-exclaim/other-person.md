# solutions

## first solution

```js
function remove(s) {
  while (s && s.slice(-1) == '!') {
    s = s.slice(0, -1);
  }
  return s;
}
```

## strategy

- a solution that scrolls through the text and removes exclamation marks from
  the last character

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
function remove(s) {
  return s.replace(/!+$/, '');
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
const remove = (s) => s.replace(/!+$/, '');
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
