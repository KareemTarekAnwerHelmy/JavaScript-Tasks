// ***************lab1***************
// let massage=prompt("enter your massage:");
// for(let i=1; i<7 ;i++ ){
//     document.write(`<h${i}> ${massage} </h${i}>`);
// }

// let num ;
// let sum =0;
// do{
//  num =Number(prompt("enter your number:"));
//  sum+=num;
//  sum!=NaN;
//  console.log("sum =",sum);
 
// }
// while( sum<100 && num !=0 ){

//     console.log("sum =",sum);
//     document.write("sum =",sum);
    
// }
// ***************lab2***************

// let numbers=[];
// for(let i=0 ; i<3 ; i++ ){
//      userInput=Number(prompt(`enter your number: ${i+1} `));
//      if(!isNaN(userInput)){
//         numbers.push(userInput); 
         
//     }
//     else{
//         alert("Please enter a valid number.");
//         i--;
//     }
//      console.log(numbers);

//     let sum = numbers[0]+numbers[1]+numbers[2];
//      console.log(sum);
    

//     let multipulication = numbers[0] * numbers[1] * numbers[2];
//      console.log(multipulication);
    

//     let division = numbers[0] / numbers[1] / numbers[2];
//      console.log(division);
    
    
// }
// ***************lab3***************
// let imageName = prompt("You have 4 images. Enter image number");
// while (imageName > 4 || imageName <0 || isNaN(imageName)) {
//      imageName = prompt(
//       "Sorry we only have images from 1 : 4. Kindly, input a number from 1:4"
//     );
//   }
// let textColor = prompt("Enter text color");

// let imgArr  = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg','images/4.jpg'];

// let displayedImage;
// switch (imageName) {
//     case "1":
//         displayedImage = imgArr[0];
//         break;
//     case "2":
//         displayedImage = imgArr[1];
//         break;
//     case "3":
//         displayedImage = imgArr[2];
//         break;
//     case "4":
//         displayedImage = imgArr[3];
//         break;
//     default:
//         alert("You entered a wrong number");
//         displayedImage = imgArr[0];
// }

// document.write(`
//     <p style="color: ${textColor};">This is your image</p>
//     <img src="${displayedImage}" style="border: 5px solid ${textColor};"/>
// `);

// ********lab4*******
let rows = "";

for (let i = 1; i < 7; i++) {
  let color = i % 2 === 0 ? 'blue' : 'white';
  rows += `<tr style="background-color:${color}"><td>${i}</td></tr>`;
}

const table = `
<table border="1" style="width:50%;margin:auto;text-align:center">
  <tr><td>value</td></tr>
  ${rows}
  <tr><td>Summation</td></tr>
</table>
`;

document.write(table);
