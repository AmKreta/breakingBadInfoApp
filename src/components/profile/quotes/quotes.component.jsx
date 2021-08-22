import React, { useCallback } from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, IconButton } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        backgroundColor: theme.palette.background.default
    },
    quoteContainer: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        border: `1px solid ${theme.palette.text.primary}`,
        boxShadow: `0 0 3px ${theme.palette.text.primary}, 0 0 3px ${theme.palette.text.primary} inset`,
        borderRadius: '5px',
        margin: `${theme.spacing(2)}px ${theme.spacing(1)}px `,
        padding: `${theme.spacing(2)}px ${theme.spacing(1)}px `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transform: 'skewX(20deg)',
        transition: '.5s ease-in-out',
        '&:hover': {
            transform: 'skewX(0deg)',
            cursor: 'pointer'
        }
    },
    playIcon: {
        color: theme.palette.background.default,
    },
    overFlowAuto: {
        overflowY: 'initial',
        overflowX: 'initial'
    }
}));

const Quotes = ({ quotes }) => {

    const classes = useStyles();
    const matches = useMediaQuery(theme => theme.breakpoints.up('lg'));

    const speak = useCallback((e) => {
        const quoteIndex = parseInt(e.currentTarget.getAttribute('data-index'));
        speechSynthesis.speak(new SpeechSynthesisUtterance(quotes[quoteIndex].quote))
    }, [quotes]);

    return (
        <Grid container item xs={12} sm={12} lg={6} className={clsx(classes.container, !matches && classes.overFlowAuto)} justifyContent='center' alignItems='center'>
            {
                quotes.length
                    ? quotes.map((item, index) => (
                        <Grid item xs={10} className={clsx(classes.quoteContainer)}>
                            <Typography key={index + item.quote_id}>{item.quote}</Typography>
                            <IconButton title='play' className={clsx(classes.playIcon)} data-index={index} onClick={speak}>
                                <PlayCircleFilledIcon />
                            </IconButton>
                        </Grid>
                    ))
                    : (
                        <Grid item xs={10} className={clsx(classes.quoteContainer)}>
                            <Typography>No qutoes by this characters found</Typography>
                        </Grid>
                    )
            }
        </Grid>
    );
}

export default Quotes;