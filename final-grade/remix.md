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
