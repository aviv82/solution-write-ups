# remix

```js
function remove(s = '') {
  if (typeof s !== 'string') {
    throw new TypeError('input text is not a string');
  }
  return s.replace(/!+$/, '');
}
```

## strategy

> i liked the replace method use better than the slice one. it is cleaner and
> requires less operations. the only two things i wanted to change is make the
> function more resistant to errors from incorrect user input and set default
> parameter value to empty string

## implementation

- `throw new` i added a guard to filter data types that are not strings.

  - the guard is the first condition in an if conditionals. i used `typeof` to
    confirm input data type is applicable.

    - if the first condition doesn't pass function will execute and return
      replaced string.

## possible refractors

- if condition could probably be written as ternary
- function might be written as implicit(?)
