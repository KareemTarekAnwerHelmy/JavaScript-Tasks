var number1 =3;
var number2 ="2.9";
var number3 ="0xff";
 number1 =3
 number2 =2.9;
 number3 =0xff;
 number1 =5;
 number2 =7;
 number3 ="eman";
var firstName ="kareem";
let middleName ='tarek';
let lastName =`anwer`;
firstName[3]='A';
let flag =true ;
console.log("This is the External JavaScript file");
console.log("firstName : " ,firstName);  
// not change firstName character at index 3 
var newName = firstName.split("");
newName[3]='A';
newName=newName.join("");
console.log("newName : " ,newName);
console.log("number1", typeof number1);
console.log("number2", typeof number2);
console.log("number3", typeof number3);
console.log("firstName", typeof firstName);
console.log("middleName", typeof middleName);
console.log("lastName", typeof lastName);
console.log("newName", typeof newName);






