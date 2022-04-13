const User = ({user, setKing}) => {
    const {id, name} = user;

    const click = () => {
        console.log('New King is ', user);
        setKing(user); // Use setter setKing
    }   // Sending data for King

    return (
        <div>
            {id} -- {name}
            <button onClick={() => click()}>Make King</button>
        </div>  // Instead of 'click()' can put 'setKing(user)'
    );
};

export default User;