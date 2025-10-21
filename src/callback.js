import React, { useCallback, useState } from "react";

function Button({onClick})
{
    console.log('Button rendered');
    return <button onClick={onClick}>Click Me!</button>;
}

const MemoizedButton = React.memo(Button); //prevent unnecessary rendering 

function Counters()
{
    const [count, setcount] = useState(0);
    //memoize the function so it doen't change on every render
    const handleClick = useCallback( ()=> {
        console.log('Button Clicked...');
    },[]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={ ()=> setcount(count+1)}>
                Increament Count
            </button>

            <MemoizedButton onClick={handleClick}/>
        </>

    );

}

export default Counters;