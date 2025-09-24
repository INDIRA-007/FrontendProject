//CALL STACK EVENT LOOP CALLBACK QUEUE
//callstack -> function execution context, it is a stack data structure which follows LIFO and shows to keep track of function execution
//and shows the output of the function
//synchronous code will go stright to the call stack
//asynchronous code will go to the callback queue and then to the call stack
//once the synchronous code is executed and then the asynchronous code will be executed
//callback queue -> it is a queue data structure which follows FIFO and shows to keep track of asynchronous code
//all the asynchronous will be queued in the callback queue
//event loop -> it is a process which checks the call stack and callback queue
//if the call stack is empty then it will take the first function from the callback queue and push it to the call stack
//and then the function will be executed
//if the call stack is not empty then it will wait until the call stack is empty

//CALL STACK <-> EVENt LOOP <-> CALLBACK QUEUE

setTimeout( () =>
{
    console.log('I am a setTimeout function')
},0);
setTimeout( () =>
{
    console.log('I am a setTimeout1 function')
},0);
console.log('I am a console log function');
console.log('I am a console log function');
console.log('I am a console log function');

// setInterval( () =>
//     {
//         console.log('I am a setInterval function');
//     }, 2000
// );
//change synchronous code to asynchronous code
//promise -> it is an object which is used to handle asynchronous code
//it has three states -> pending, fulfilled, rejected
//pending -> initial state, neither fulfilled nor rejected  
//fulfilled -> operation completed successfully
//rejected -> operation failed
//promise is used to handle asynchronous code in a better way
//promise is used to avoid callback hell
//promise is used to handle multiple asynchronous operations
//promise is used to handle errors in asynchronous code
//promise is used to chain multiple asynchronous operations
//promise is used to make the code more readable and maintainable
//promise is used to handle the result of an asynchronous operation
//promise is a inbuild class in javascript, which will act as a async operation
let prom = new Promise( (res, err) =>
{
    //asynchronous operation
    err("I'm successful response");
});
//pending, fulfilled, rejected
prom.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("error",err);
});
 //to subscribe to the promise, once the promise is fulfilled then the then() method will be called

async function getResponse(){
    let res = await prom;
    console.log("function response",res);
}
// getResponse();
//async await is used to handle asynchronous code in a better way
//async await is used to avoid callback hell
//async await is used to handle multiple asynchronous operations
//async await is used to handle errors in asynchronous code
//async await is used to chain multiple asynchronous operations
//async await is used to make the code more readable and maintainable
//async await is used to handle the result of an asynchronous operation
//async await is a syntactic sugar over promise
//async await is a way to write asynchronous code in a synchronous way
//async await is a way to handle promises in a better way
//async await is a way to handle errors in a better way
//async await is a way to handle multiple asynchronous operations in a better way

// types of promises
// allsettled, all race
let prom1 = new Promise((res, err) => {res("promises1");});
let prom2 = new Promise((res, err) => {res("promises2");});
let prom3 = new Promise((res, err) => {err("promises3");});
let prom4 = new Promise((res, err) => {err("promises4");});

Promise.all([prom1, prom2, prom3, prom4])
.then((res) =>
{
    console.log("All promises are resolved", res);
}).catch((err) =>{
    console.log("--error--", err);
});

Promise.allSettled([prom1, prom2, prom3, prom4])
.then((res) =>
{
    console.log("All promises are resolved", res);
    let fil = res.filter((e) =>{
        return e.status == "fulfilled"
    } )
    console.log("filtered", fil);
}).catch((err) =>{
    console.log("--error--", err);
});

let newProm = [
    { status: 'fulfilled', value: 'promises1' },
  { status: 'fulfilled', value: 'promises2' },
  { status: 'rejected', reason: 'promises3' },
  { status: 'rejected', reason: 'promises4' }
]
