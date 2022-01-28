'use strict';

function calcAge(age) {
  if (age > 0 && typeof age === 'number') {
    let ageInDays = age * 365;
  } else {
    alert('Enter a correct age in numbers');
  }
  return ageInDays;
}

let ageInyears = Number(prompt('Enter your age:'));
alert('Your age in days= ' + calcAge(ageInyears));
//console.log('Your age in days= '+ calcAge(ageInyears));
