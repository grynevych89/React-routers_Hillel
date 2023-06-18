import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './User.css'

const User = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const {userId} = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

                if (!response.ok) {
                    throw new Error('HTTP-request error!')
                }

                const data = await response.json();
                setUser(data);
            } catch (e) {
                setError(e.message);
            }



        }
        fetchUser();
    }, [userId])

    return (
        <div className='div-user'>
            {error &&
                <div>
                    <h2 className={"error-header"}>Oops!..</h2>
                    <p className={"error-message"}>{error}!</p>
                </div>
            }
            {user &&
                <div className={"user"} key={user.id}>
                    <h6 className={"user-header"} >Name: {user.name}</h6>
                    <p className={"user-body"}>Email: {user.email}</p>
                    <p className={"user-body"}>Phone-number: {user.phone}</p>
                    <p className={"user-body"}>City: {user.address?.city}</p>
                    <p className={"user-body"}>Company: {user.company?.name}</p>
                </div>
            }
        </div>
    );
}

export default User;