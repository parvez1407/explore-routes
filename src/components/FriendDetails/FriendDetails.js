import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const { id, name, email, username, phone, website } = friendDetails;

    return (
        <div>
            <h1>Friend Details Page</h1>
            <h1>Everything you need to know about this person</h1>
            <div className='friendDetails'>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default FriendDetails;