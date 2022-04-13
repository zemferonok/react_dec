import {useEffect, useState} from "react";

import User from "./User"
import {userService} from "../services/user_service";

const Users = ({setKing}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setKing={setKing}/>)}
        </div>  // setKing={setKing} send setter for King data
    );
};

export default Users;