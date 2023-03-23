const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sum = arr.reduce((total, item) =>{
    return total + item;
  }, 0)

  return sum;
};

const multiply = function(arr) {
  const product = arr.reduce((total, item) =>{
    return total * item;
  }, 1)

  return product;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  return (num > 1) ? num * factorial(num - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
