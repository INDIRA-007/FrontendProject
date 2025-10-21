import React,{useState} from 'react';

function User(props){
    const[age, setAge]=useState(props.startAge);
    console.log("Welcome");
    return(
        <>
            <h2>{props.name}</h2>
            <p>Age: {age}</p>
            <button onClick={()=>setAge(age + 1)}>Increment Age</button>
        </>
    );

}
export default React.memo(User);