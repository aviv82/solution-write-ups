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

- better understanding of
  [implicit vs. explicit](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript/)

### 2

```js
function remove(s) {
  return s.replace(/!+$/, '');
}
```

### 3

```js
const remove = (s) => s.replace(/!+$/, '');
```
