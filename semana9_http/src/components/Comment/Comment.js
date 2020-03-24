import React, { Component } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import styles from './comment.module.css';

class Comment extends Component {
    render() {
        const {
            comment: { body, email, name }
        } = this.props;
        return (
            <Card>
                <CardHeader title={name} />
                <CardContent>
                    {body}
                    <div className={styles.email}>{email}</div>
                </CardContent>
            </Card>
        );
    }
}

export default Comment;
