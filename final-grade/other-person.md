# solutions

## first solution

```js
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}
```

### strategy

- solution that employs a series of 'classic' `if` conditionals to calculate
  final grade of student

## second solution

```js
finalGrade = (exam, projects) => {
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
  }
};
```

## third solution

```js
const finalGrade = (e, p) =>
  e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0;
```
