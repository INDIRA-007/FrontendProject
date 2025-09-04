//inbuilt functions in array
//11th Aug 2025

//CRUD operations in array
let m =[1,2,3];
m[3] = 7;
console.log(m.length);
m.push(5); // to add element at last
console.log(m);
m.unshift(0); //to add element at first index
console.log(m);
m.pop(); // to remove last element from array
m.shift(); // to remove first element from array
console.log(m);

//splice -splice(firstindex, 2 elements, add the elements into array)
// it is used to remove, add elements into the array
//adding elements or deleting elements in random position
//modify the original array
m.splice(1,2,10,11);
console.log(m);

//slice - to show the elements till the specified index
//it doen't modify the original array
console.log(m.slice(1,3));

//copy within the array - copy the array element and paste it in the same array
m.push(2,3,9,8);
console.log(m);
m.copyWithin(4,0,2);
console.log(m);

//fill- to replace the  same number at the given position
m.fill(12,0,4);
console.log(m);

console.log(m.indexOf(12));
console.log(m.lastIndexOf(12));
console.log(m.includes(12));  // to check the duplicates 
console.log(m.join("")); // array to string
console.log([3,2,1].join(""));
let k = [1,3,2, 7,5,9,2,6];   //bubble sort
for(let i=0; i<k.length; i++)
{
    for(let j= i+1; j <k.length; j++)
    {
        if(k[i] > k[j])
        {
            let bkp = k[i];
            k[i] = k[j];
            k[j] = bkp;
        }
    }
}
console.log(k);
console.log(k.sort((a,b)=> a-b)); //sorting in ascending order
console.log(k.sort((a,b)=> b-a)); //sorting in ascending order

let str ="hello";
let sorted = str.split("");
console.log(sorted.sort());
console.log(sorted.reverse().join("")); // array to string
let m1=[1,2,3,4,[1,[2,3,[5,6]]]];
console.log(m1.length);

m1=m1.flat(Infinity);
console.log(m1);

//type of array function
//array methods
//iteration methods

