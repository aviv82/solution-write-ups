# Other solutions:

## solution 1

````js
function calcAge(age){
let ageInDays= age*365;
return ageInDays;
} ```

## Solution 2

```js
//let ageInyears= Number(prompt('Enter your age:'));
//alert('Your age in days= '+ calcAge(ageInyears));
console.log('Your age in days= '+ calcAge(65));
const calcAge = age => {
    return age >= 0 ? age * 365 : undefined
}

console.log(calcAge(10))```
````
