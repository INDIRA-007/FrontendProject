//decopy -> just copy the value 
//unary - it doen't expect more than one number (++, --)
//binary - it does expect more than one number 

let a = 5;
let b= a++; //(postincrement)
let c= ++a; //preincrement
console.log(a);
console.log(b);
console.log(c);

//binary
//arithmetic, logical. relational. bitwise, assignment

//arithmetic
// + - * / %   => ( / -> this give round of value eg: 5/2 = 2.45)

console.log("7" * "2");
console.log("7" * 2);
console.log("7a" * "2");  // 7 is considered as alphanumeric (7, 7a, 7%) (space and Dot doesn't affect the arithemetic in JS)
console.log("7." * "2");
console.log("7" * false);
//addition ( + ) will work only for number, it will append the value for alphanumeric 
console.log("7" * null); // 0
console.log("7" * undefined); //NaN
console.log(2/0);
console.log(0.1 + 0.2 == 0.3);  // output is false, it doen't maintain proper decimal
console.log(0.1+0.21);
console.log(0.5-0.3);
console.log("7" + null);
console.log(7+null);
console.log(7+undefined);
console.log("7" +undefined);

console.log([1,2] + [3,2]);  //1,23,2
console.log([1,2] * [3,2]);

console.log({name: "js"} + {name: "jss"});
console.log({name: "js"} * {name: "jss"});
console.log([12]*[3]);

//relational operator
//> < >= <= == !=
console.log("2" > "120");
console.log("1" > "10"); //string comparision (it compars each digit)
console.log("2" > 12); //number comparision
console.log("2" > "2");
console.log("java" > "javascript"); //alphabetic orders (checks the ASCII values)
console.log(undefined == false)
console.log(false == 0)
console.log(null == undefined)
console.log(null == false)
console.log(null == 0)

console.log(null > -1)
// Boolean Number
// boolean String
// bool bool
//primitive - string num bool null undefined (task)
console.log([2,3] > [1,4]);
console.log([2,4] > [9]); //it consider single digit

