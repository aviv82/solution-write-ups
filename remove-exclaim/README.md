# remove exclamation mark

- [origin](https://www.codewars.com/kata/57faece99610ced690000165)

## motivation

### description

- Remove all exclamation marks from the end of sentence.

### application

- formatting of standardized forms, questionnaires or surveys

- grammar correction

## syntax

> removeExclaim(text) --> text

### parameters

### text: string

- a sentence

### return: string

- `text` modified with all exclamation marks(!) removed

## test cases

> remove("Hi!") === "Hi" remove("Hi!!!") === "Hi" remove("!Hi") === "!Hi"
> remove("!Hi!") === "!Hi" remove("Hi! Hi!") === "Hi! Hi" remove("Hi") === "Hi"

## use cases

> this snippet is only useful when used when applied to words or sentences i
> chose three examples which apply two different strategies

- remove exclamation mark

```js
let userInput = 'give me liberty or give me death!!!';
let formatInput = removeExclaim(userInput);
console.log(formatInput); // give me liberty or give me death
```

## retrospective

- this was a simple challenge on its face, but actually i learned a lot from it
- learned some new terms like implicit vs. explicit
- also learned about the replace and slice methods and their syntax
