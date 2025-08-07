//statements
//conditional iterative switch jump
//conditional statement - if else
    if(2 >1){
        console.log("condition is true");
    }
    //falsy values - 0,  null, undefined, empty
    //true values - number, space , conditons
    if("")
    {
        console.log("condition is false");
    }
    if(null)
    {
        console.log("condition is false");

    }
    else{
        console.log("condition is true");
    }


    if("")
        ;
        console.log("Empty statement");
    // else
    //     console.log("Condition is false--");

    //types of if
    //ladder-if, nested-if
    //ladder - priority based condition check
    let age = 90;
    if(age >= 70)
    {
        console.log(" Reserved for SeniorCitizen");
    }
    else if(age > 50 )
    {
        console.log("Mid-level Seniorcitizen");
    }
    else if(age > 30)
    {
        console.log("Mid level citizen");
    }
    else{
        console.log("Not a senior citizen");
    }

    //nested if
    if(age >= 70)
    {
        if(age >= 80)
        {
            console.log("Birth is confirmed")
        }
        else{
            console.log("Birth is not confirmed");
        }
    }
    //iterative
    //for, while, do-while

    for( let i=0; i<10; i+=2)
    {
        console.log("ITeration:" + i);
    }
    // for(;;)
    // {
    //     console.log("Statement");
    // } // infinite loop

    let arr = [1,2,3,4,5,6,7,8];
    for(let i=0; i<arr.length; i++)
    {
        console.log("Iteration: "+ arr[i]);
    }
    for(let i=0; i<arr.length;)
    {
        console.log("Iterate: " +arr[i]);
        i++;
    }

    let k=0;
    while(k < arr.length){
        console.log("Array element : "+ arr[k]);
        k++;
    } // priority for condition

    do{
        console.log("Do while: "+arr[k]);
        k++;
    }while(k < arr.length);  //priority for execution and condtion


    //advance forloop -- stinrg, array, object  
    //for-of -> can be used with array, for-in -> can be used with object, array, string
    for(let itme of arr)
    {
        console.log("Item of array: "+ itme);
    }

    let obj = {name:"Indira", depart:"IT", salary:75000, location:"Bangalore"};
    for(let key in obj)
    {
        console.log("Key: "+ key + " Value: "+ obj[key]);
    }
// for(let a of 123)
// {
//     console.log("Item of number: "+ a); // will not work
// }
for(let key in arr)
{
    console.log("Key: "+ key + ", Value: "+ arr[key]);
}

//break, continue, return -- jump statements
//break - to exit from loop, continue - to skip the current iteration, return - to
//exit from function
let arrary = [1,2,3,4,5,6,7,8,9];
for(let a1 of arrary){
    if(a1==3)
    {
        break; // exit from loop
    }
    console.log("Item of array: "+ a1);
}
for(let a1 of arrary){
    if(a1==3)
    {
        continue; // exit from loop
    }
    console.log("Item of array with continue: "+ a1);
}

for(let i=0; i<5;i++)
{
    if(i==1)
        continue; // skip the current iteration
    console.log("hi");
    // i++;  //infinite loop
}

//switch statement
let day = 1;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
} // switch statement   

let a2 = [1,2,3]
a2[1,2]=a2[2,1] // a2 is now 1
console.log("updated array: " + a2);

//duplicates, unique, 


//find duplicates in array - find the unique elements in array
//unique elements in array

//find the duplicate elements in array
//palindrome - string, number, anagram
//prime number, fibonacci series, factorial

//second largest element in array
//pattern matching - regex
//sorting