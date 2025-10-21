import {useEffect,useState} from 'react';

function Users(){

    const [users, setUsers] = useState([]);
    const [err, setErr]= useState(false);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data) => setUsers(data))
        .then((err)=> setErr(true))
    },[])

    const handleDelete = (id) => {
        const filteredUser = users.filter((item)=> item.id !== id)
        setUsers(filteredUser);
    }

    return (
        <>
        <h2>Users List</h2>
        {err && <p>Error, try again later</p>}
        {users && users.length > 0 &&
        users.map((item) => (
            <ul>
                <li>
                    {item.username}
                    {item.email}
                    <button onClick={()=>handleDelete(item.id)}>Delete User</button>
                </li>
            </ul>
        ))}
        </>
    );
}


export default Users;