import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    container: {
        color: 'red'
    }
}));

const Profile = (info) => {

    const classes = useStyles();

    return (
        <Grid container className={clsx(classes.container)} >
            info
        </Grid>
    );
}

export default Profile;