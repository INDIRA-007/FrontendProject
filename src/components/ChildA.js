import { useContext } from "react";
import { UserContext } from "../UserContext";

const ChildA = () => {
    const{user} = useContext(UserContext);

    return(
        <>
            <h3>Child A</h3>
            <p>User from Context: {user}</p>
        </>
    );
}

export default ChildA;