import User from "./user";
import { useState } from "react";
function Parent()
{
    const[count, setCount] = useState(0);

    function Increment()
    {
        setCount(count + 1);
    }
    function greet(){
        console.log("Hello!")
    }

    return(
        <>
        <User name="Indira" startAge={25} greet={greet()}/>
        <User name="Arjun" startAge={33}/>
        <button onClick={Increment}>inc count</button>
        </>
    );

}

export default Parent;