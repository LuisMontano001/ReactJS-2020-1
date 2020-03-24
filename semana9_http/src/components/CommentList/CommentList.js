import Axios from 'axios';
import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import styles from './commentList.module.css';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments = () => {
        Axios.get('./comments.json')
            .then(({ data }) => {
                this.setState({ ...this.state, comments: data });
            })
            .catch(() => {
                alert('Error loading comments, please reload the page.');
            });
    };

    render() {
        const { comments } = this.state;
        return (
            <>
                <h1>Taller semana 9 - HTTP </h1>
                <h2>Desarrollo Web con ReactJS</h2>
                <h3>Juan Pablo López Cifuentes</h3>
                <hr />
                <h1>Comments</h1>
                {comments.map(comment => (
                    <div className={styles.comment} key={comment.id}>
                        <Comment comment={comment} />
                    </div>
                ))}
            </>
        );
    }
}

export default CommentList;
