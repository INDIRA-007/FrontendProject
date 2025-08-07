//Duplicates
let numbers = [1, 2, 3, 4, 5, 1,2];
let obj = {};
for(let num of numbers){
    if(!obj[num]){
        obj[num] = 1;
    }
    else{
        obj[num]++;
    }
}
console.log("Duplicates: ", obj);

for( let a1 in obj)
{
    if(obj[a1] > 1)
    {
        console.log("Duplicate number " + a1);
    }
}

//second largest number
let num1 = [1,2,3,4,5,1,2, 7, 6];
let largest = 0;
let secondLargest = 0;

for(let i=0; i< num1.length; i++)
{
    if(num1[i] > largest)
    {
        secondLargest = largest;
        largest = num1[i];
    }
    else if(num1[i] > secondLargest && num1[i] !== largest)
    {
        secondLargest = num1[i];
    }
}

console.log("Largest number: " + largest);
console.log("Second largest number: " + secondLargest);

//sorting - 2 for loops required

