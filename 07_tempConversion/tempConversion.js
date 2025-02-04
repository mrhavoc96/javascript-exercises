const convertToCelsius = function(farhen) {
	let cel = (farhen - 32) *  (5/9);
	cel = Math.round(cel * 10) / 10;
	return cel;

};

const convertToFahrenheit = function(cel) {
	let fahren = (cel * (9/5)) + 32;
	fahren = Math.round(fahren * 10) / 10
	return fahren;
};



console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
