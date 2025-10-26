import { useState, useRef } from "react";


//Controlled component
// function Forms(){
//     const[name, setName] = useState('');
//     const[email,setEmail] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Name: ${name}, Email: ${email}`)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <h2>Controlled Form</h2>
//             <input type="text" name="name" value={name} onChange={(e) => {console.log(e.target.value);  setName(e.target.value)}} placeholder="Enter a UserName"/>
//             <input type="email" name="email" value={email} onChange={(e) => {console.log(e.target.value); setEmail(e.target.value)}} placeholder="Enter a Email ID"/>
//             <br />
//             <button type="submit">Submit</button>


//         </form>
//     );
// }


//uncontrolled components
function Forms()
{
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = nameRef.current.value;
        alert(`Name:${name} Email:${email} `)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form</h2>
            <input type="text" name="name" ref={nameRef}  placeholder="Enter a UserName"/>
            <input type="email" name="email" ref={emailRef}  placeholder="Enter a Email ID"/>
            <br />
            <button type="submit">Submit</button>


        </form>
    );
}



export default Forms;