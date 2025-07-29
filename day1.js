console.log("Hi");
//erros while running the js 
//module not found - path is not correct
//node not found - node is not installed properly

//design, logic and framework
//variables
//types of variables - local, global, block
//types of datatype - primitive and non primitive
//primitive - data which as single word/value( number, boolean string, symbol, undefined, null)
//undefined - no value assigned to the variable( eg -> let a;)
//null - store the value as null to the variable( eg -> let a=null;)
//non primitive - data with commas(array, objects)
 

//day2  - 28-07-2025
//array
let b =[55,75,5,2,1,"hi"];
console.log(b[15]);  //takes the value of index position
  //undefined as 15th index value is not available
  //non-primitive data types is mutable
  //stirng is primitive in javascript, for other languages string is non-primitive
b[16]=85;
console.log(b);
console.log(b.length);

//shallow copy (applicable for non-primitive datatypes)
//values reasigned or changed will affect its parent array and if values changes in  child array will affect in parent array as well.
let c=b;
b[1]=18;
console.log(b);
console.log(c);

//object ( non-primitivce)
//key-value pair

let obj ={ name: "js", class:"front-end", marks:[44,55,96]};
console.log(obj.name);
console.log(obj["name","class"]);  // preferrable to use

obj["name1"]="updated";
console.log(obj);

let obj1 = obj;
obj["name"] = "obj1 change";
console.log(obj1);

//features -seal, freeze

//Object.seal(obj); //seal -  cannot create new objects in the array, maintain it current keys, allows to update the values of the key
//Object.freeze(obj); //freeze- cannot create new objects in the array, and it doesn't allow to update the values of the key(update).
console.log(Object.keys(obj)); //to display only the keys
console.log(Object.values(obj)); // to display the values
obj[null]="nulvalue";
obj[undefined] = "undefinedcalue";
obj['1,2,3'] = "arrayvalue";
console.log(obj);
console.log(obj['1,2,3']);

//operators - manipulate two values
//unary and binary
//binary - two fields (comparision)
//unary - nee donly one fields



//hoisting
// let, var, const
// a=12;
// let a;
// console.log(a);

i=14;
var i;
console.log(i);

//const - once declared, cannot assign the value
//let - declare and then initiallize
//var - can initialize and declare later

{
    var k=12;
    let a=21;
}
console.log(k);
//console.log(a); // let is being used, cann't call the a value outside block
//let doesn't support blocked scope
//var support blocked scope


