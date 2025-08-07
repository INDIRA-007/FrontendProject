//*
//***
//*****

// let rows = 3;
// let cols = 1;
// let result = '';

// for(let i=1; i<=rows; i++){ // for llooping through rows
//     for(let j=1; j<=cols; j++){ // for looping through columns
//         result += "*";
//     }
//     result += "\n";
//     cols +=2;
// }
// console.log(result); // print the result

//*
//* * *
//* * * * *

let rows =4;
let cols =1;
let result = '';
let space = rows *2 -2;
for(let i=1; i<=rows; i++){
    for(let j=1; j<=space; j++)
    {
        result += " "; // add space before stars
    }
    for(let j=1; j<=cols; j++)
    {
        result += "*";
    }
    result += "\n";
    cols += 2;
    space -=1; // decrease space for the next row
}
console.log(result);