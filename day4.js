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
