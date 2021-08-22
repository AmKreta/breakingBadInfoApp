import React, { useState, useCallback } from 'react';
import { Paper, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CharacterInfo from './info/info.component.jsx';

const useStyles = makeStyles(theme => ({
    container: {
        overflow: 'hidden',
        padding: theme.spacing(1),
        height: '388px',
        position: 'relative'
    },
    item: {
        height: '100%',
        width: "100%"
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}));

const CharacterCard = ({ name, birthday, occupation, img, status, nickname }) => {

    const classes = useStyles();

    const [isActive, setIsActive] = useState(false);

    const toggleActive = useCallback(() => {
        setIsActive(prevState => !prevState);
    }, [setIsActive]);

    return (
        <Grid container item xs={12} sm={6} md={4} lg={3} className={clsx(classes.container)} onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            <Grid item xs={12} elevation={5} component={Paper} className={clsx(classes.item)}>
                <img src={img} alt={name} className={clsx(classes.img)} loading='lazy' />
            </Grid>
            <CharacterInfo {...{ name, birthday, occupation, img, status, nickname, isActive }} />
        </Grid>
    );
}

export default CharacterCard;