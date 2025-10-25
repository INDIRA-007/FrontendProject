//day-8  
//props drilling  -- passing user value from parent -> Child -> InnerChild
//to avoid this, use context hook
function Parent(){             
    const user = "Indira";

    return <Child user={user} />
}

function Child(user){
    return<InnerChild user={user}/>
}

function InnerChild(user){
    return <p>Hello,{user}</p>
}

export default Parent;


//step 1: const userContext = React.createContext()

//step 2: wrap the child component inside parent
//<userContext.Provider>
//<Parent />
//</userContext.Provider>

//step 3: pass the props
//<userContext.Provider value={user}>
//<Parent />
//</userContext.Provider>

//step4: with the help of usecontext, we can access the value from anywhere
