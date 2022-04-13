import React from 'react';

const King = ({king}) => {  // Catch King data
    const {name, username, email} = king;

    return (
        <div>
            <h2>King {username}</h2>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
};

export default King;