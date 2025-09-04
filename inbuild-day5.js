//inbuild functions for the inbuild module
//string array

//string
let str = "Hello javascript";
console.log(str.split("l")); // split string into array of characters 
console.log(str.split("")); // split string into array of words
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf("l")); // find the index of first occurrence of 'l'
console.log(str.lastIndexOf("l")); // find the index of last occurrence of 'l'
console.log(str.search(/L/i)); // find the index of first occurrence of 'l' //regex - regular expression
console.log(str.replace("javascript", "world")); // replace 'javascript' with 'world'
console.log(str.slice(0, 12)); // extract a part of the string from index 0 to 5
console.log(str.slice(4)); // extract a part of the string from index 6 to end
console.log(str.slice(-6,-1)); // extract a part of the string from index -6 to -1
console.log(str.substring(0, 7)); // extract a part of the string from index 0 to 5

//substring does not support negative indices but functionality remains same
//slice supports negative indices
//indexof does not support regex
// search supports regex

console.log(Array.from(str.matchAll("l")));  //to find all occurrences of 'l' in the string
console.log(str.padStart(20, "*")); // pad the string with '*' at the start to make it 20 characters long
console.log(str.padEnd(20, "*")); // pad the string with '*' at the end to make it 20 characters long
console.log(str.padStart(str.length +3,"Mr."));
console.log(str.repeat(3)); // repeat the string 3 times
console.log(str.trim().length); // remove whitespace from both ends of the string
console.log(str.includes("scr")); // check if the string includes 'javascript'
console.log(str.startsWith("Hello")); // check if the string starts with 'Hello'
console.log(str.endsWith("scri")); // check if the string ends with 'script'
console.log(str.charAt(2));

let word = "2a3b4c";
let result = "";
let digit =0;

for(let i=0; i< word.length; i++)
{
    if(!isNaN(word[i]))
    {
        digit = parseInt(word[i]);
    }
    else
    {
        result += word[i].repeat(digit);
        digit =0;
    }
}
console.log(isNan("b")); // check if the value is NaN

