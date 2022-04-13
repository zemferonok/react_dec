const User = (props) => { // rsc>TAB for fast built
    // props is all receiving data
    const {value} = props;
    const {id, name, username:nickname, email} = value;
    // destructuring props data and renaming of field

    return (
        <div>
            {id} -- {name} -- {nickname} -- {email}
        </div>
    );
};

export default User;