function toFahrenheit(celsius) {
 // Write your code here
	  if (celsius < -273.15 || celsius > 1.8e9) {
        return "Invalid temperature value";
    }

    // Convert Celsius to Fahrenheit using the formula: F = C * 9/5 + 32
    const fahrenheit = celsius * 9/5 + 32;

    // Format the result with two decimal points of precision
    return fahrenheit.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));

