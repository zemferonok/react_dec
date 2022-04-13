import {useEffect, useState} from "react";	// System import

import User from "./User"; 	// My own import

const Users = () => {   // Name of func start from Big letter
    const [users, setUsers] = useState([]);
    // users store the data, setUsers set them in users
    // Waiting data initialState can be any: {}, [], number, ...

    useEffect(() => {   // For using fetch in react
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => value.slice(0, 5))
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} value={user}/>)
                // {..} for using JS code, key for unique object
                // value={user} is sending data to User
            }
        </div>
    );
};

export default Users;