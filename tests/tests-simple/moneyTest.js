// situation = test case 
// basic test cases - tests if the code is working
// edge cases - test with values that are tricky

import {formatCurrency} from '../../scripts/utils/money.js';

// basic test
console.log('test suite: fromatCurrency')

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

// edge case
console.log('works with 0');

if(formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

// edge cases 
console.log('rounds up to the nearest cent');

if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
}