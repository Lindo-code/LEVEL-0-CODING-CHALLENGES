function toFahrenheit(celcius) {
  const fahrenheit = (celcius * 9/5) + 32;
  return `${fahrenheit.toFixed(1)} degrees fahrenheit.`;
}

function toCelcius(fahrenheit) {
  const celcius = (fahrenheit - 32) * 5/9;
  return `${celcius.toFixed(1)} degrees celcius.`;
}
console.log(toCelcius(66), toFahrenheit(28));