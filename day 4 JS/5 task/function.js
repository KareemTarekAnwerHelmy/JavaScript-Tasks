// 1- Function to convert (Pascal Case).
function PascalCase(input) {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(PascalCase("kareem tarek anwer"));

// 2- Function to return the longest word .
function longestWord(sentence) {
  let words = sentence.split(" ");

  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord("full stack using pyton"));

// 3- Function to return string with letters in alphabetical order.
function sortAlpha(input) {
  return input.split("").sort().join("");
}
console.log(sortAlpha("python"));

// 4- Function to get the month name .
function getMonthName(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date(date).getMonth()];
}
console.log(getMonthName("2024-12-24"));

// 5- Function to get area of a circle (pi r*2) .
function calculate(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(calculate(3));
