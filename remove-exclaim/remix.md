# remix

```js
const smash = (words = []) => {
  if (!Array.isArray(words)) {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    throw new TypeError('argument is not an array');
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (typeof words[i] !== 'string') {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new TypeError('array is not an array of strings');
    }
  }
  return words.join(' ');
};
```

## strategy

> i thought using the join method was the best way to go with this function the
> only thing i changed was add a couple of guards to protect my function from
> faulty user input

## implementation

- `throw new` i added a guard to filter data types that are not arrays.

  - the guard is the first condition in an if conditionals. i used
    `Array.isArray()` to confirm input data type is applicable.

    - if the first condition passes function will go through a second guard - a
      `for loop` that checks each value of the array. i used `typeof` to check
      value is a string
    - once checks pass function executes `join` method and returns a string of
      all array concatenated values and adds spacing between values.

## possible refractors

- if conditions could probably be written as ternary
- might be a way to use forEach method instead of for loop but i had issues
  figuring that out
