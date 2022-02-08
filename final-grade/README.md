# final grade

- source on [codewars](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

## description

- calculates a student's final score based on test score and completed work

## application

- calculating overall sum (not only academic) based on two different data sets

## syntax

> finalGrade(exam, projects) --> number

### parameters

- exam = student's test result
- projects = number of completed assignments

### return: number

- student's final grade

## test cases

> 100, 12 --> 100 99, 0 --> 100 10, 15 --> 100

> 85, 5 --> 90

> 55, 3 --> 75

> 55, 0 --> 0 20, 2 --> 0

## use cases

> this snippet is limited to a very specific formula of calculating a score

> i chose three cases which each used different syntax in their if conditionals

- calculate final grade

```js
let myExamScore = 80;
let myCompletedProjects = 4;
let myFinalGrade = finalGrade(myExamScore, myCompletedProjects);
console.log('my final grade is: ' + myFinalGrade); // my final grade is: 75
```

## retrospective

- if conditionals can be bulky and long or short but difficult to read
- optimal formatting is somewhere in the middle
