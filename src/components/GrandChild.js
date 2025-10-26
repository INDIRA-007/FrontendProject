import { useContext } from "react";
import { UserContext } from "../UserContext";

const GrandChild = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <>
        <h3>GrandChild component</h3>
        <p>Current User: {user}</p>
        <button onClick={() => setUser("Lai")}>Change User</button>
        </>
    );
}


export default GrandChild;