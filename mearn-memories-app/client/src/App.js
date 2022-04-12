import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { Posts } from './components/Posts/Posts';
import { Form } from './components/Form/Form';
import { getPosts } from './actions/posts.js';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth='lg'>
            <AppBar
                className={classes.appBar}
                position='static'
                color='inherit'
            >
                <Typography
                    className={classes.heading}
                    variant='h2'
                    align='center'
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src='https://images.unsplash.com/photo-1531845116688-48819b3b68d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                    alt='memories-bg'
                    height={60}
                    width={60}
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classes.mainContainer}
                        container
                        justifyContent='space-between'
                        alignItems='stretch'
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
