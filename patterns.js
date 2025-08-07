//to identify the pattern
//*
//***
//*****
//find rows 
//find columns

// let rows = 7;
// let result = '';
// let cols = 1;
// let num =1;
// for(let i =1; i <= rows; i++)  // focus on rows
// {
//     for( let j=1; j<= cols; j++)  // focus on columns
//     {
//         //result += '*';
//        // result += j %2 != 0 ? '*' : ' '; // add space after odd columns
//         result += j %2 != 0 ? num++ : ' ';
//     }
//     result += '\n'; // new line after each row
//     cols += 2; // increase the number of columns for the next row
// }
// console.log(result);

// let rows = 7;
// let result = '';
// let cols = 1;

// for(let i =1; i <= rows; i++)  // focus on rows
// {
//     let num =1;
//     for( let j=1; j<= cols; j++)  // focus on columns
//     {
//         //result += '*';
//        // result += j %2 != 0 ? '*' : ' '; // add space after odd columns
//         result += j %2 != 0 ? num++ : ' ';
//     }
//     result += '\n'; // new line after each row
//     cols += 2; // increase the number of columns for the next row
// }
// console.log(result);


//reverse the pattern
// let rows = 5;
// let result = '';
// //let cols = 1;
// let cols = rows * 2 - 1; // total columns for the first row
// for(let i =1; i <= rows; i++)  // focus on rows
// {
//     let num =1;
//     for( let j=1; j<= cols; j++)  // focus on columns
//     {
//         result += '*';
//        // result += j %2 != 0 ? '*' : ' '; // add space after odd columns
//         // result += j %2 != 0 ? num++ : ' ';
//     }
//     result += '\n'; // new line after each row
//     cols -= 2; // decrease the number of columns for the next row
// }
// console.log(result);


//     *
//   ***
// *****

let rows = 4;
let result = '';
let cols = 1;
let spaces = rows *2 -2; // total spaces for the first row
for(let i =1; i <= rows; i++)  // focus on rows
{
    for(let k=1; k <= spaces; k++) // add leading spaces
    {
        result += ' ';
    }
    for( let j=1; j<= cols; j++)  // focus on columns
    {
        result += '*';
       // result += j %2 != 0 ? '*' : ' '; // add space after odd columns
        //result += j %2 != 0 ? num++ : ' ';
    }
    result += '\n'; // new line after each row
    cols += 2; // increase the number of columns for the next row
    spaces -= 2; // decrease the number of leading spaces for the next row
}
console.log(result);