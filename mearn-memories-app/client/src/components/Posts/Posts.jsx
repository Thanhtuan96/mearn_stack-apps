import React from 'react';
import { Post } from './Post/Post';
import useStyles from './styles';
export const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <ul>
                <li>
                    <Post></Post>
                </li>
                <li>
                    <Post></Post>
                </li>
            </ul>
        </>
    );
};
