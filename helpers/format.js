export const toCelsius = (fahrenheit) =>
  (Math.round(((fahrenheit - 32) / 1.8) * 10) / 10).toFixed(1);
