//map
//two types of map in javascrip
//1.which is used in the array iteration methods
//2.which is act as a class
// which map definition i need to explain

let ma = new Map();  //like an object (key,value) pair
//to add new key into object
//objects doesn't accept duplicate keys
//new key value is add if existing key is not present

let obj = {};
obj= {name:"javascript", version: 3.5};
obj=[{name:"java", version: 6.0},
    {name:"CSS", version: 3.2}, {name:"JS",version: 8.0}
    ];

//we cannot remove the key from objects, so we go for map
//we can remove elements in array using arr.pop()

//to find the key in the object
console.log(obj["name"] == undefined);
ma.set("name","C#");
ma.set("version",9.0);
console.log(ma);

//update or insert - set
// remove - delete
//to remove entire data - clear
// to check the key = has
// retrive - get
// to see the size - size
//to retrive the keys - keys
//to retrive the values - values

console.log(ma.get("name"));
console.log(ma.has("name"));

ma.delete("version");
console.log(ma.values());
console.log(ma.keys());
console.log(Array.from(ma.values()));


//object and map difference
//map as a class - it is same as object but keys cannot be deleted in object
// but in map, keys can be deleted

//new keyword - it defines the class(in-build in javascript)

//set - same as array but it does not accept the duplicates
// read and update cannot be used in the set
//it does not maintain the order while updating the element
// set is used to store only non duplicate numbers

let m7 = new Set();
m7.add("John");
m7.add("Jane");
console.log(m7);
m7.delete("John");
console.log(m7);

let a = [12,3,6,14,8,3,65,12,6]
let m8 = new Set(a);
console.log(a.length - m8.size); 
// to display the count of duplicated number(12,3,6)
console.log(m8.size); 
// to display the count of unique number(12,3,6,14,8,65)

let a1 = [12,3,4,3,4,12,3,7]
let m9 = new Set();
for(let i =0; i<a1.length; i++)
{
    if(m9.has(a1[i]))
        m9.delete(a[i]);
    else
        m9.add(a[i]);
}
//to find unique letters using hashmap
let a2 = [12,3,4,3,4,12,3,7]
let obj2 = {12:1, 13:4};
//obj2[12] = obj2[12] + 1;
//obj2[arr[i]];

//map == object (remove method is there in map)
//set == array
//set doesnot support index and duplicate (get cannot be used)

// forin - to iterate through objects
let number = [12,3,4,3,4,12,3,7];
let obj_num = {};
for(let i=0; i<number.length; i++)
{
    if(obj_num[number[i]])
    {
        obj_num[number[i]] = obj_num[number[i]] + 1;
    }
    else{
        obj_num[number[i]]=1;
    }
}
console.log(obj_num);