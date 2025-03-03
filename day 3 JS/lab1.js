// let input = prompt("enter your string : ");
// let vowels = ["a", "e", "i", "o", "u"];
// let counter = 0;
// let split = input.split("");
// console.log(split);
// for (let i = 0; i < input.length; i++) {
//   if (vowels.includes(split[i])) {
//     counter++;
//   }
// }
// console.log(`number of vowels in string ${counter}`);
// ***********lab2*********** test

// let input = prompt ("enter your string : ");
// let split=input.split (" ");
// console.log(split);
// let index =split[0][0] ;
// console.log(index);
// let newSplit = split[0].replace(split[0][0],split[0][0].toUpperCase());
// console.log(newSplit);

// **********************

// function cap(input) {
//     return input
//       .split(" ")
//       .map(word => word[0].toUpperCase() + word.slice(1))
//       .join(" ");
//   }

//   const input = "hello world this is a test";
//   const result = cap(input);
//   console.log(result);

//   *************lab3***************
// function countChar(input, char) {
//   return input.split(char).length - 1;
// }

// const input = prompt("Enter a string: "); 
// const char = prompt("Enter the character to count: ");
// const result = countChar(input, char);
// console.log(`The character '${char}' occurs ${result} times.`);

// **********lab4*********
// function countWords(input) {
//   return input.split(" ").length; 
// }

// const input = prompt("Enter a string: "); 
// const result = countWords(input);
// console.log(`The number of words is: ${result}`);
// *******lab5*******
function validationOfdata() {
  let userName;
  let userNum;

  while (true) {
    userName = prompt("enter your name : ");
    if (isNaN(userName)) {
      console.log(`my name is ${userName}`);
      break;
    } else {
      alert("enter your valid user name ");
    }
  }
  while (true) {
    userNum = prompt("enter your number : ");
    if (
      userNum.includes("010") ||
      userNum.includes("011") ||
      userNum.includes("012") ||
      userNum.includes("015")
    ) {
      let numberPart = userNum.split("-")[1];
      if (numberPart || numberPart.length === 7 || !isNaN(numberPart)) {
        console.log(`My number is ${userNum}`);
      } else {
        console.log("Invalid number format");
      }
    } else {
      console.log("Invalid prefix");
    }
  }
}
validationOfdata();
