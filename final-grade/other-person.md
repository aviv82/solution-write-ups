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

- a function that compares the input values to a set of conditions and outputs
  the correct one

### implementation

- solution that employs a series of 'classic' `if` conditionals to calculate
  final grade of student based on sets of `||` and `&&` operators

#### function - explicit

#### if conditionals - compares given arguments to condition sets

#### logical operators - || and && sets of conditions

### possible refractors

- long and clunky `if` conditionals could be written as ternary
- could use guards against unapplicable data types

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

### second strategy

- a function that compares the input values to a set of conditions and outputs
  the correct one

### second implementation

- solution that employs a `switch` loop of conditionals to calculate final grade
  based on sets of `||` and `&&` operators in each `case`

#### 2nd function - explicit

#### switch loop of conditionals - compares given arguments in cases

#### logical operators - || and && sets of case conditions

### refractors

- even longer and clunkier than `if` conditional
- `switch` loops are very readable i think but long
- could use guards against unapplicable data types

## third solution

```js
const finalGrade = (e, p) =>
  e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0;
```

### third strategy

- a function that compares the input values to a set of conditions and outputs
  the correct one

### third implementation

- solution that employs a series of ternary `if` conditionals to calculate final
- grade of student based on sets of `||` and `&&` operators
- uses shortened parameter names

#### function - implicit

#### if conditionals - compares given arguments in cases

#### logical operators - sets of || and && operators

### potential refractors

- ternary code is much shorter especially with shortened parameter names
- but is it readable?
- could use guards against unapplicable data types
