import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { title, body, id } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/post/${id}`);
    }
    return (
        <div className='all-post'>
            <h2>Title: {title}</h2>
            <p>Details: {body}</p>
            {/* option 1/ plain link */}
            <Link to={`/posts/post/${id}`}>Show Details-1: {id}</Link>
            {/* option 2/with button */}
            <Link to={`/posts/post/${id}`}>
                <button>Show Details-2</button>
            </Link>
            {/* option 3/ with navigate hooks */}
            <button onClick={handleNavigate}>Show Details-3</button>
        </div>
    );
};

export default Post;