//PROBLEM 1

// *
// **
// ***
// ****
// *****

// let rows = 5;
// let cols = 1;
// let pattern = "*";
// let result="";

// for(let i=1; i<=rows; i++)
// {
//     for(let j=1; j<=cols; j++)
//     {
//         result += pattern;
//     }
//     result += "\n";
//     cols++;
// }
// console.log(result);

//PROBLEM 2

// ******
// *****
// ****
// ***
// **
// *

// let rows = 6;
// let cols = rows;
// let result ="";

// for(let i=1; i<=rows; i++)
// {
//     for(let j=1; j<=cols; j++)
//     {
//         result += "*";
//     }
//     cols--;
//     result += "\n";
// }
// console.log(result);

//PROBLEM 3
//     *
//    **
//   ***
//  ****
// *****

// let rows = 5;
// let cols =1;
// let result = "";

// for(let i=1; i<=rows; i++)
// {
//     for(let space=1; space<=rows-i; space++)
//     {
//         result += " ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result += "*";
//     }
//     cols++;
//     result += "\n";
// }
// console.log(result);

// PROBLEM 4
// *****
//  ****
//   ***
//    **
//     *

// let rows =5;
// let cols = rows;
// let result = "";

// for(let i=1; i<=rows; i++)
// {
//     for(let space =1; space <i; space++)
//     {
//         result += " ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result+= "*";
//     }
//     cols--;
//     result += "\n";
// }
// console.log(result);

// PROBLEM 5
//     *
//    ***
//   *****
//  *******
// *********

let rows =5;
let cols =1;
let result = "";

for(let i=1; i<= rows; i++)
{
    for(let space=1; space<=rows-i; space++)
    {
        result += " ";
    }
    
    for(let j=1; j <=cols; j++)
    {
        result += "*";
    }

    for(let k=1; k <=cols-1; k++)
    {
        result += "*";
    }
    cols++;
    result += "\n";

}
console.log(result);