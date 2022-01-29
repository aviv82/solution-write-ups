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
console.log(formatInput);
```

## retrospective

## solutions

### 1

```js
function remove(s) {
  while (s && s.slice(-1) == '!') {
    s = s.slice(0, -1);
  }
  return s;
}
```

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
