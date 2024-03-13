const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const input = Number(number.value);
  if (input === 0) {
    output.innerHTML = "Please enter a valid number";
  } else if (input < 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    output.innerHTML = convertToRoman(input);
  }
});

const convertToRoman = (input) => {
  const numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let result = "";
  let number = input;
    numerals.forEach((arr) => {
        while (number >= arr[1]) {
            result += arr[0];
            number -= arr[1];
        }
    });
    return result;
};
