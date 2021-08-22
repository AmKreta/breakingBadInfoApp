import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.default
    }
}));

const Quotes = (quotes) => {

    const classes = useStyles();

    return (
        <Grid container className={clsx(classes.container)}>
           quotes
        </Grid>
    );
}

export default Quotes;