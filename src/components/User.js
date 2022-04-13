import {userService} from "../services/user_service";

const User = ({user}) => {
    const {id, name, email} = user;

    const del = (id) => {   // Delete an User from API
        userService.deleteById(id).then(value => console.log(value));
    }   // After CRUD operation response can be optional

    return (
        <div>
            {id} -- {name} -- {email}
            <button onClick={() => del(id)}>delete</button>
        </div>  // onClick is event, its needs call-back func
    );
};

export default User;