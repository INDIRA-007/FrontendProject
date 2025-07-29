let array = [12,23,56,89,10];
console.log(array);
console.log(array[0],array[1],array[2]);

array[10]=25;
console.log(array);
//to find length of an array
console.log(array.length);
//object
let student = {name:"Indira", department:"IT", subject:["English","Maths","IT","Physics","Chemistry"]};
console.log(student);
//to call the array element inside an object
console.log("Subjects: " + student["subject"]);
//shallow copy
let updatedarray = array;
updatedarray[4]="updatedvalue";
console.log("updated values in the array: "+ updatedarray );