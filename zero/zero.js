// let a =1_00;
// let b =2_00.5;
// let c =1e2;
// let d =2.4;
// console.log(Math.round(Math.min(a,b,c,d)));
// console.log(Math.pow(a,Math.round(d)));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2));
// console.log((Math.ceil(b)/Math.ceil(d)));

// let a ="elzero web school";
// console.log(a.charAt(2).toUpperCase()+a.slice(3,6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ",1));
// console.log(a.substr(0,6) + a.substr(-7,7));
// console.log(a.charAt(0).toLowerCase() + a.slice(1,-1).toUpperCase() + a.charAt(a.length-1).toLowerCase() );

// write to ternary if syntax
// let a = 10;
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("unknown");

// let st ="elzero web school";

// if (typeof"?????" === typeof"34"){
//     console.log("Good");
// } 

// if (typeof"?????" === typeof"w"){
//      console.log("Good");
// }

// if ("?????" !== "string"){
//     console.log("Good");
// }

// if (typeof"?????" === typeof "number"){
//     console.log("Good");
// }
// if (typeof"?????" === typeof"elzero web school"){
//     console.log("Good");
// }
// let job ="Support";
// let salary =0;
// switch (job) {
//     case "Manager":
//         console.log(salary=8000);
//         break;
//     case "IT":
//     case "Support":
//         console.log(salary=6000);
//         break;
//     case "develover":
//     case "desinger":
//         console.log(salary=7000);
//         break;
//     default:
//         console.log(salary=4000);
//         break;
// };

//  let holidays =4;
//  let money =0;
//  if (holidays===0) {
//     money=5000;
//     console.log(money);
// }
// else if(holidays===1||holidays===2){
//      money=3000;
//      console.log(money);  
//  }
// else if(holidays===3){
//      money=2000;
//      console.log(money);  
//  }
// else if(holidays===4){
//      money=1000;
//      console.log(money);  
// }else{
//      money=0;
//      console.log(money);  
//  };

// function showDetails(...data) {
//     let a = 0,
//     b = 0,
//     c = 0;
//     for (let i = 0; i < 3; i++) {
//         typeof data[i] === 'string'
//         ? (a = data[i])
//         : typeof data[i] === 'number'
//         ? (b = data[i])
//         : data[i] === false
//         ? (c = 'Not Availble')
//         : (c = 'Availble');
//     }
//     return console.log(`Hi ${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
// }

// showDetails("kareem",25,true);
// showDetails(25,"kareem",true);
// showDetails(true,25,"kareem");
// showDetails(false,25,"kareem");

// let names = function(...names){
//     return `string [${names.join("],[")}]=>done!` ;
// };
// let names = (...names)=>`string [${names.join("],[")}]=>done!` ;

// console.log(names("kareem","tarek","anwer","helmy"));

// let myNumbers =[20,50,10,60];
// let calc =(one,two,...nums)=>one+myNumbers[0]+myNumbers[1] ;
// console.log(calc(10,myNumbers,myNumbers));

// let myNumbers =[20,50,10,60];
// let calc =function(one,two,...nums){
//     return one+myNumbers[0]+myNumbers[1] ;
// }
// console.log(calc(10,myNumbers,myNumbers));