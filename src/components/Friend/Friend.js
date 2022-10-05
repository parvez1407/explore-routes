import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { id, name, email, username, phone, website } = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>User-Name: <Link to={`/friends/friendDetails/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;