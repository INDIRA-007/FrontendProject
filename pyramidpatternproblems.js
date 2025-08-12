//PROBLEM 1
//         1
//        2 2
//       3 3 3
//      4 4 4 4
//     5 5 5 5 5
//    6 6 6 6 6 6
//   7 7 7 7 7 7 7
//  8 8 8 8 8 8 8 8
// 9 9 9 9 9 9 9 9 9

// let row = 9;
// let cols =1;
// let result ="";
// for(let i=1; i<=row; i++)
// {
//     for(let space=1; space<=row-i; space++)
//     {    
//         result += " ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result += i + " ";
//     }
//     cols++;
//     result += "\n";
// }
// console.log(result);


//PROBLEM 2
//         1
//        1 2
//       1 2 3
//      1 2 3 4
//     1 2 3 4 5
//    1 2 3 4 5 6 
//   1 2 3 4 5 6 7
//  1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9

// let row =9;
// let cols =1;
// let result ="";
// for(let i=1; i<=row; i++)
// {
//     for(let space=1; space<=row-i; space++)
//     {    
//         result += " ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result += j + " ";
//     }
//     cols++;
//     result += "\n";
// }
// console.log(result);

//PROBLEM 3
//         *
//        * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * * 
//   * * * * * * *
//  * * * * * * * *
// * * * * * * * * *

// let rows=9;
// let cols = 1;
// let result="";

// for(let i=1; i<=rows; i++)
// {
//     for(let space=1; space<=rows-i; space++)
//     {
//         result += " ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result += "* ";
//     }
//     cols++;
//     result += "\n";

// }
// console.log(result);

//PROBLEM 4
//                 1
//               1 2 1
//             1 2 3 2 1
//           1 2 3 4 3 2 1
//         1 2 3 4 5 4 3 2 1
//       1 2 3 4 5 6 5 4 3 2 1
//     1 2 3 4 5 6 7 6 5 4 3 2 1
//   1 2 3 4 5 6 7 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1

// let rows = 9;
// let cols = 1;
// let result = "";
// for(let i=1; i<=rows; i++)
// {
//     for(let space=1; space<=rows-i; space++)
//     {
//         result += "  ";
//     }
//     for(let j=1; j<=cols; j++)
//     {
//         result += j + " ";
//     }
//     for(let k=cols-1; k>=1; k--)
//     {
//         result += k + " ";
//     }
//     cols++;
//     result += "\n";

// }    
// console.log(result);

//PROBLEM 5

//                 9
//               8 9 8
//             7 8 9 8 7 
//           6 7 8 9 8 7 6
//         5 6 7 8 9 8 7 6 5
//       4 5 6 7 8 9 8 7 6 5 4
//     3 4 5 6 7 8 9 8 7 6 5 4 3
//   2 3 4 5 6 7 8 9 8 7 6 5 4 3 2
// 1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1

// let rows = 9;
// let cols = 1;
// let result = "";
// for(let i=rows; i>=1; i--)
// {
//     for(let space=1; space<=rows-i; space++)
//     {
//         result += "  ";
//     }
//     for(let j=i; j<=rows; j++)
//     {
//         result += j + " ";
//     }

//     for(let k=rows-1; k>=i; k--)
//     {
//         result += k + " ";
//     }
//     cols++;
//     result += "\n";
// }
// console.log(result);