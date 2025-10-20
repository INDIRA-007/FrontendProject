//normal funtion

// function Hello()
// {

// }
//arrow function - ES6 version
// const Hello = () => {

// }

function Hello()
{
    const name="John";
    const isLoggedIn = true;
    let message;
    if(isLoggedIn)
    {
        message = "Entered User";
    }
    else{
        message = "Guest User";
    }
    return(
        <>
            <h2>Hello World!</h2>
            <p>Welcome to my page</p>
            <p>Hi {name}</p>

            <div>
                { isLoggedIn ? <h1>Welcome {name}</h1>: <h1>Please Login</h1>}
                {isLoggedIn && <button>Logout</button>}
                <p>{message}</p>
                {isLoggedIn ? message="Entered-User":message="Guest-User"}
            </div>
        </>
        
    )
}


export default Hello;