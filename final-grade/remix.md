# remix

```js
const finalGrade = (exam = 0, projects = 0) => {
  const errorMessage = 'argument is not an integer positive rational number';
  if (
    !Number.isInteger(exam) ||
    !Number.isInteger(projects) ||
    typeof exam !== 'number' ||
    typeof projects !== 'number' ||
    exam < 0 ||
    projects < 0 ||
    exam === Infinity ||
    projects === Infinity ||
    Number.isNaN(exam) ||
    Number.isNaN(projects)
  ) {
    throw new TypeError(errorMessage);
  }
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects > 4
    ? 90
    : exam > 50 && projects > 1
    ? 75
    : 0;
};
```

## strategy

> i wanted to find a balance between compact ternary code and code that was
> easily readable.

> only thing i changed was add a few guards to protect my function from faulty
> user input

## implementation

- `throw new` i added a guard to filter data types that are not arrays.

  - the guards are the first condition in an if conditionals. i used
    `Number.isInteger()`, `Number.isNaN` and `typeof` to confirm input data type
    is applicable.

    - if the guards don't pass they will throw an error message using
      `throw new TypeError`
    - once checks pass function runs a ternary set of `if` conditions in order
      to calculate the student's final score

## possible refractors

- i wonder if some of the guards i wrote might be unnecessary but am not sure
  which, or how to write them more efficiently
