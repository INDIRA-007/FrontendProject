//arrayiteration
let arr = [1, 2, 3, 4, 5];
let new1=[];
for (let i = 0; i < arr.length; i++) {
    new1.push(arr[i] + 5); // increment each element by 1
}
console.log(new1); // [6, 7, 8, 9, 10]

let arr2 =[{name: "John", age: 30},{name: "Ind", age: 15},{name: "Jon", age: 20}, {name: "Jane", age: 25}];
let new2 = arr2.map((e,i,arr2) =>
{
    return e.age;
    //return {age: e.age}; 
});
console.log(new2); // [30]
//map -> to manipulate each element in the array
//    -> extracting a specific property from each object in the array
let new3 = arr2.filter( (e,i,arr3) => {
    return e.age > 20;
});
console.log(new3); // [{name: "John", age: 30}]

//filter -> to filter out elements based on a condition
//        -> extracting objects that meet a certain condition
// undefined, null, 0, false, NaN are considered falsy values
// truthy values are all other values

let new4 = arr2.map ((e,i,arr2) => {
    return e.age > 20
});
console.log(new4); // [true, false, false, true]
//find -> to find the first element that meets a condition
let new5 = arr.find((e,i,arr2) =>
{
    return e.age >= 30;
});
console.log(new5); // {name: "John", age: 30}

let arr3 = [1,2,3,2,1];

let a = [{name: "John", age: 30},
{name: "Ind", age: 15},
{name: "Jon", age: 20}, 
{name: "Doe", age: 30}];

//{30: [{name: "John"},{name: "Doe"}], 45:[{name:  "Jane"}]}
let obj = {};
for(let i=0; i<a.length; i++)
{
    // if(obj[a[i].age] )
    // {
    //     obj[a[i].age].push({name: a[i].name});
    // }
    // if(obj[a[i].age] )
    // {
    //     obj[a[i].age].push({name: a[i].name});
    // }
    // else
    // {
    //     obj[a[i].age] = a[i];
    // }   
}
//reduce -> to reduce the array to a single value
let m = [1,2,3,4];
let num = m.reduce((prev, curr) => {
    return prev + curr;
},0);
console.log(num);

//findindex -> to find the index of the first element that meets a condition
let index = arr2.findIndex((e,i,arr2) => {
    return e.age > 20;
});
console.log(index); // 0

//flatmap -> to map each element to a new array and then flatten the result
let flatMapped = arr2.flatMap((e,i,arr2) => {   
    return e.name.split("");
});
console.log(flatMapped); // ['J', 'o', 'h', 'n', 'I', 'n', 'd', 'J', 'o', 'n', 'J', 'a', 'n', 'e']  
//flat -> to flatten the array to a single level

m.forEach((e,i,arr2) => {
    console.log(e); // 1, 2, 3, 4
});
//forEach -> to iterate over each element in the array
//map -> to create a new array by applying a function to each element
//filter -> to create a new array with elements that meet a condition
//reduce -> to reduce the array to a single value by applying a function to each element
//find -> to find the first element that meets a condition
//findIndex -> to find the index of the first element that meets a condition
//flatMap -> to map each element to a new array and then flatten the result
//flat -> to flatten the array to a single level

//foreach is similar to for loop but it is more readable and concise 
// and does not return a new array, break or continue cannot be used with forEach, 
// when array contains objects, forEach can be used to iterate over each object and perform operations on them
//map is similar to forEach but it returns a new array

//for loop - break, return cna be used
//foreach - when array contains objects, and we want to modify , it doesn't return the result in new array

let m1 = [{name: "John", age:30},{name:"Indira", age:25}]
m1.forEach((e)=>
{
    console.log(e.name);
    e.age += 1;
    return;
});
console.log(m1);

//seasonal flower
//find the weather which has more than 2 flowers
// let seasonalFlowers =[
//     {seasons: "summer", flowers: ["Rose", "Lily", "Tulip"]},
//     {seasons: "winter", flowers: ["Daffodil", "Snowdrop", "Pansy"]},
//     {seasons: "spring", flowers: ["Daisy", "Bluebell", "Primrose"]},
//     {seasons: "autumn", flowers: ["Chrysanthemum", "Aster"]},
// ]

