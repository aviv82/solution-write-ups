# sentence smash

- [origin](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

## motivation

### description

- concatenate values in a string array into a string sentence, including space
  between words

### application

- auto formatting of user input into coherent output
- grammar recognition of sentence elements

## syntax

> sentenceSmash(words[]) --> sentence

### parameters

### words: string array

- an array of string values

### return: string

- `text` the values from the words array concatenated into a sentence

## test cases

> ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

## use cases

> this snippet is only useful when used when applied to string arrays(or
> potentially mixed strings and number arrays) i chose three examples which
> apply two different strategies

- join values in string array into a sentence

```js
let words = ['to', 'sleep,', 'perhaps', 'to', 'dream.'];
let newSentence = smash(words);
console.log(newSentence); // to sleep, perhaps to dream.
```

## retrospective
