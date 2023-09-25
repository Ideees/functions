//--------------------1-----------------------

function sum(num1, num2) {
  return (sum = num1 + num2);
}
console.log(sum(3, 4));

//--------------------2-----------------------

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(-2)); // true

//--------------------3-----------------------

function reverse(input) {
  let reversedString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
  return reversedString;
}
console.log(reverse("Hello"));
console.log(reverse("Software"));
console.log(reverse("12345"));

//--------------------4-----------------------

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(calculateFactorial(0));
console.log(calculateFactorial(3));
console.log(calculateFactorial(5));
console.log(calculateFactorial(10));

//--------------------5-----------------------

function convertTemperature(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Example usage:
var celsiusTemperature = 36;
var fahrenheitTemperature = convertTemperature(celsiusTemperature);
console.log(
  celsiusTemperature +
    " degrees Celsius is equal to " +
    fahrenheitTemperature +
    " degrees Fahrenheit"
);

//--------------------6-----------------------

function countVowels(inputString) {
  inputString = inputString.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString.charAt(i);

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

var inputString = "hello word";
var result = countVowels(inputString);
console.log("The number of vowels in '" + inputString + "' is: " + result);
