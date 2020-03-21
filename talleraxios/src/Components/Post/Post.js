import React from 'react';
import classes from './Post.module.css';

var Post = (props) => {
    return (
            <div className = {classes["post"]}>
                <h2>{props.post.title}</h2>
                <p>{props.post.author}</p>
                <span>{props.post.year}</span>
            </div>
    )
}

export default Post;