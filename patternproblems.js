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

// let rows =5;
// let cols =1;
// let result = "";

// for(let i=1; i<= rows; i++)
// {
//     for(let space=1; space<=rows-i; space++)
//     {
//         result += " ";
//     }
    
//     for(let j=1; j <=cols; j++)
//     {
//         result += "*";
//     }

//     for(let k=1; k <=cols-1; k++)
//     {
//         result += "*";
//     }
//     cols++;
//     result += "\n";

// }
// console.log(result);


/*
let rows = 5;
 let col =1;
 let result ="";
 
 for(let i=1; i<=rows; i++)
 {
     for(let space =1; space<=rows-i; space++)
     {
         result += " ";
     }
     for(let j=1; j<=col; j++)
     {
         result +="*";
     }
     col+=2;
     result += "\n";
 }
 console.log(result);
 */


//PROBELEM 6

// *********
//  *******  
//   *****
//    ***
//     *


// let rows=5;
// let cols=1;
// let result ="";
// let star = rows * 2 -1
// for(let i=1; i<=rows; i++)
// {
//     for(let space=1; space <i; space++)
//     {
//         result += " ";
//     }
//     for(let j=1; j<=star; j++)
//     {
//         result += "*";
//     }
    
//     //cols++;
//     star-=2;
//     result += "\n";
// }
// console.log(result);

//PROBLEM 7
//   *
//  ***
// *****
// *****
//  ***
//   *

//  let rows = 3;
//  let col =1;
//  let result ="";
//  let backcol = rows *2 -1;
 
//  for(let i=1; i<=rows; i++)
//  {
//      for(let space =1; space<=rows-i; space++)
//      {
//          result += " ";
//      }
//      for(let j=1; j<=col; j++)
//      {
//          result +="*";
//      }
//      col+=2;
//      result += "\n";
//  }
 
//  for(let i=1; i<=rows; i++)
//  {
//      for(let space=1; space<i; space++)
//      {
//          result +=" ";
//      }
//      for(let j=1; j<=backcol; j++)
//      {
//          result += "*";
//      }
//      backcol -=2;
//      result += "\n";
//  }
//  console.log(result);


