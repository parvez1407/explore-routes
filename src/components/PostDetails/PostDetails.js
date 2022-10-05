import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { title, body, userId, id } = postDetails;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friends/friendDetails/${userId}`);
    }
    return (
        <div>
            <h2>Details about post: {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;