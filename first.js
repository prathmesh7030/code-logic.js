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

let items = [250, 650, 300, 900, 550];

let i = 0;
for(let val of items) {
    console.log(`Value at index ${i} ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}
