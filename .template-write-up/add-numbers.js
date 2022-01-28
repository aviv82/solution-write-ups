'use strict';

function addUp(number) {
  let sum = 0;
  if (Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
      sum = sum + i;
    }
  } else {
    alert('enter an integer');
  }
  console.log(sum);
  return sum;
}

addUp(4);
