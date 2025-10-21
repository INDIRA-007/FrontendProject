import {useRef,useState} from 'react';

function Ref(){

    const inputRef = useRef(null);
    const [text, setText] = useState('');
    const handleClick = (e) => {
        //inputRef.current.focus();
        //alert(inputRef.current.value);
        console.log(e.target.value)
        setText(e.target.value);
    };

    return(
        <>
        {/* <input type="text" ref={inputRef}/> */}
        <input name="text" value={text} onChange= {(e)=>handleClick(e)} />
        <button onClick={handleClick}>Focus Input</button>
        </>
    );
}
export default Ref;