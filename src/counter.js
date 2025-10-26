

function Counter()
{
    let count=0;
    // increment = () =>{
    //     count +=1
    // }
    return(
        <>

            <h1>Counter App</h1>
            <button onClick={Counter}>
                Increment
            </button>
        </>
        
    );
}

export default Counter;