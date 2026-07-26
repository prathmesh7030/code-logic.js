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


let num = prompt("enter a number:");


if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
}

else{
    console.log(num, "is not multiple of 5")
}



