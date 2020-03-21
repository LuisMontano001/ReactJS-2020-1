import React from 'react';
import Post from '../Post/Post';
import classes from './Posts.module.css'

var Posts = (props) => {
    return(
        <section className = {classes.posts}>
            {props.posts.map((post, postIndex) => {
                return (
                    <Post
                        post = {post}
                        postIndex = {postIndex}
                        key = {postIndex}
                    />
                )
            })}
        </section>
    );
}

export default Posts;