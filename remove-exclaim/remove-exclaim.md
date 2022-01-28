# remove exclamation mark

## origin

- https://www.codewars.com/kata/57faece99610ced690000165

## description

- Remove all exclamation marks from the end of sentence.

## examples

> remove("Hi!") === "Hi" remove("Hi!!!") === "Hi" remove("!Hi") === "!Hi"
> remove("!Hi!") === "!Hi" remove("Hi! Hi!") === "Hi! Hi" remove("Hi") === "Hi"

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
