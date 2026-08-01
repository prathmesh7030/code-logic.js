// const product = {
//     title: "Ball pen",
//     rating: 4,
//     offer: 5,
//     price: 270
// };




// console.log(product);

//Conditional Statement

// let age = 25;

// if(age < 18) {
//     console.log("junior");
// }

// else if (age > 60){
//     console.log("senior");
// }

// else{
//     console.log("Middle");
// }




//Switch Case 

// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// Logs 0 and 1




// check multiple

// let num = prompt("enter a number:");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// }

// else{
//     console.log(num, "is not multiple of 5")
// }




//Grade system

// let score = prompt("Enter your percentage (0-100)");
// let grade;

// if(score >= 90 && score <= 100){
//     grade = "A";
// }
// else if(score >=70 && score < 89){
//     grade = "B";
// }
// else if(score >=60 && score < 69){
//     grade = "B";
// }
// else if(score >=50 && score < 59){
//     grade = "B";
// }else if(score >=0 && score < 49){
//     grade = "B";
// }



//for loop

// for(let count = 1; count <= 5; count++){
//     console.log("Prathmesh");
// }


//while loop

// let i = 1;
// while(i <= 10) {
//     console.log("Prathmesh");
//     i++;
// }


//for-of loop

// let str = "Prathmesh";

// for(let i of str){
//     console.log("i =", i);
// }

 

//print even numbers 

// for (let num = 0; num <= 100; num++){ 
//     if(num %2 === 0){
//     //Even number
//     console.log("num =",num);
//     }
// }



//number guess game 

// let gameNum = 25;
// let userNum = prompt("Guess the number from 1 to 50 : ");

// while(userNum != gameNum){
//     userNum = prompt("you entered a wrong number. guess again : ");
// }

// console.log("congratulations, you entered right number");



//template literals

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);



//Escape characters

// let str = "Prathmesh\tkolpe"; //15
// console.log(str.length);



//String concatination

// let str1 = "Local";
// let str2 = "Classes";

// let res = "I am learning coading from" + str1 + str2;
// console.log(res);



//string replace

// let str = "hello";
// console.log(str.replace("h","y"));



//Generate username

// let fullName = prompt("Enter your full name without spaces");

// let username = "@" + fullName + fullName.length ;
// console.log(username);



//arrays

// let marks = [ "Math: 100" , "Bio: 90" , "chem: 92" , "phy: 100" , "zoology: 95" ];
// console.log(marks);
// console.log(marks.length);



//calculate average

// let marks = [95, 90, 97, 98, 99];

// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`Your average marks = ${avg} %`);



//change the array to store final price after applying offer

// let items = [250, 650, 300, 900, 550];

// let i = 0;
// for(let val of items) {
//     console.log(`Value at index ${i} ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }



//concate arrays

// let marvelheros = ["spiderman", "ironman"];
// let dcheroes = ["superman", "batman"];
// let indianheros = ["shaktiman", "krishna"]

// let heroes = marvelheros.concat(dcheroes, indianheros);

// console.log(heroes);



//create array to store companies

// let companies = ["Bloombug", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//  companies.slice(2, 1, "Ola");

//  companies.push("Amazon");




//functions

//arithmetic operations using functions

//Sum function

// function sum(a, b) {
//     return (a + b);
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// //multiplication function

// function mul(a, b) {
//     return (a * b);
// }

// const arrowMul = (a, b) => {
//     console.log(a * b);
// };

// //substraction function

// function sub(a, b) {
//     return (a - b);
// }

// const arrowSub = (a, b) => {
//     console.log(a - b);
// };

// //division fuction

// function div(a, b) {
//     return (a / b);
// }

// const arrowdiv = (a, b) => {
//     console.log(a / b);
// };



// function ot count vovels

// function countVovels(str) {
//     let count = 0;
//     for (const char of str) {
//         if(
//             char === "a"||
//             char === "e"|| 
//             char === "i"|| 
//             char === "o"|| 
//             char === "u"
//         ){
//             count++;
//         }
//     }

//     console.log(count);
// }



// for each loop in functions

// let arr = ["Pune", "mumbai", "kolkata", "landon"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr );
// });



//print squares using foreach loop

// let nums = [67, 56, 72, 93, 47];

// nums.forEach((num) => {
//     console.log(num * num); //num**2
// });



//print square using map array

// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val * val;
// });

// console.log(newArr);



//saperate even numbers using filter array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let evenArr = arr.filter((val) => {
//     return val %2 === 0; 
// });

// console.log(evenArr);



//Reduce array method

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(output);



//filter out marks of students above 90

// let marks = [99, 57, 90, 98, 95, 87, 94, 45, 67, 78];

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);



//input a number from user and calculate sum and factorial

let n = prompt("Enter a number : ");

let arr = [];

for(let i = 1; i <= n; i++) {
    arr [i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, cur) => {
    return res + cur;
});

console.log("sum = ", sum);

let factorial = arr.reduce((res, cur) => {
    return res * cur;
});

console.log("factorial = ", factorial);