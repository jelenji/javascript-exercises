const convertToCelsius = function(fah) {
  return Math.round((((fah - 32.0) * 5.0/9.0) * 10)) / 10;
};

const convertToFahrenheit = function(cel) {
  return Math.round((( (cel * 9.0 / 5.0) + 32.0) * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
