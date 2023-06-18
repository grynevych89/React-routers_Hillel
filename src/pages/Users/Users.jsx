import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('HTTP-request error!')
                }

                const data = await response.json();
                setUsers(data);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchUsers();
    }, [])

    return (
        <div className='users-list'>
            <h2>Users</h2>
            {error &&
                <div>
                    <h2 className={"error-header"}>Oops!..</h2>
                    <p className={"error-message"}>{error}!</p>
                </div>
            }
            {users && users.map(user =>
                <div className={"user"} key={user.id}>
                    <Link to={`/users/${user.id}`} className={"user-header"} >Name: {user.name}</Link>
                    <p className={"user-body"}>Email: {user.email}</p>
                    <p className={"user-body"}>Company: {user.company.name}</p>
                </div>
            )}
        </div>
    );
}

export default Users;