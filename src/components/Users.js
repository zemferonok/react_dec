import {useEffect, useState} from "react";

import User from "./User"
import {userService} from "../services/user_service";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {   // Use userService instead of Fetch
        userService.getAll().then(value => setUsers([...value]));
    }, [])  // ... is SpreadOperator, its put all elements of value

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;