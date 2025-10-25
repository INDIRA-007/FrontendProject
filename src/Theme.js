import React,{createContext,useContext,useEffect,useState} from "react";

//create Context
const ThemeContext = createContext();

//create provider

function ThemeProvider({children}){
    const[theme, setTheme] = useState('light');


    const toggleTheme = () =>{
        setTheme((prev) => (prev === "light" ? "dark":"light"))
    }

    useEffect(()=>{
        document.body.style.backgroundColor = theme === "light"?"white":"black";
        document.body.style.color = theme === 'dark' ? 'white':'black';
    },[theme])
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div style={{backgroundColor:theme==="light" ? "white":"black"}}>
            {children}
            </div>

        </ThemeContext.Provider>
    );
}

//consumer - child component
function ThemeButton(){
    const{theme,toggleTheme} = useContext(ThemeContext);
    return(
        <>
        
        <h2>
            Theme Change...
        </h2>
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
        </>
    );
}


function Theme(){
    return (
        <ThemeProvider>
            <ThemeButton></ThemeButton>
        </ThemeProvider>
    )
}

export default Theme;