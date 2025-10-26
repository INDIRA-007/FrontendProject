import { createContext , userState, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({Children}) => {
    const[user,setUser] = useState("Indira");
    return (
        <UserContext.Provider value={{user,setUser}}>
            {Children}
        </UserContext.Provider>
    );
}