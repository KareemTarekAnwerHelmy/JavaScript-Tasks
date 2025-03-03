let arrSize;

while (true) {
  arrSize = parseInt(prompt("Enter size of array : "));
  if (isNaN(arrSize) || arrSize <= 0) {
    console.log("Invalid size,Please enter a positive number");
  } else {
    break;
  }
}

let array = [];

for (let i = 0; i < arrSize; i++) {
  let element;

  while (true) {
    element = prompt(`Enter element ${i + 1}:`);
    if (isNaN(element)) {
      console.log("Invalid input,Please enter a number");
    } else {
      array.push(Number(element));
      break;
    }
  }
}
// to display array with the same receiving order
console.log("Array:", array);

// to display array with ascending order *********
let arrayAscending = [...array].sort(function (a, b) {
  return a - b;
});
console.log("display array ascending : ", arrayAscending);

// to display array with descending order*************
let arrayDescending = [...array].sort(function (a, b) {
  return b - a;
});
console.log("display array descending : ", arrayDescending);

// to reversed version of original array**************
[...array].reverse();
console.log("display array reverseing : ", [...array]);

// filter even number*************
let evenNumbers = array.filter((num) => num % 2 === 0);
console.log("display even numbers of array : ", evenNumbers);
console.log(array);

// 30% discount for all numbers in original array ***********
let arrayDiscount = array.map((num) => num * 0.7);
console.log("Array with 30% discount:", arrayDiscount);

// represent all numbers of array concated with ***************
let result = array.join("***");
console.log(result);

// receive number from user then display all numbers from array which divisible by received number********
let input = parseInt(prompt("enter number to divisible array : "));
let divisibleNumbers = array.filter((num) => num % input === 0);
console.log("display divisible numbers of array : ", divisibleNumbers);
divisibleNumbers.length = 0;
alert("this input number not divisible");
