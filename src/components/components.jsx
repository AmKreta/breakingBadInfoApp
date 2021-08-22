import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import AppBar from './appBar/appBar.component';
import Main from './main/main.component';
import Pagination from './pagination/pagination.component';
import Profile from './profile/profile.component';

import { setCharacterList } from '../action/action';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%',
        overflowY: 'scroll'
    }
}));

const Component = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCharacterList());
    }, [dispatch]);

    useEffect(() => {

    }, []);

    return (
        <Grid container className={clsx(classes.container)}>
            <Switch>
                <Route exact path='/'>
                    <AppBar />
                    <Main />
                    <Pagination />
                </Route>
                <Route exact path='/profile/:name' component={Profile} />
            </Switch>
        </Grid>
    );
}

export default Component;