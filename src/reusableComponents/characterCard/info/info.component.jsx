import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import './info.styles.css'

const useStyles = makeStyles(theme => ({
    info: {
        opacity: 1,
        padding: theme.spacing(1),
        overflow: 'hidden',
        height: `calc( 100% - ${theme.spacing(2)}px)`,
        width: `calc( 100% - ${theme.spacing(2)}px)`,
        margin: theme.spacing(1),
        top: 0,
        left: 0,
        position: 'absolute',
        display: 'flex',
        transition: '.5s ease-in-out',
        zIndex: 2,
        '&:hover': {
            cursor: 'pointer'
        },
        '&::before': {
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            opacity: .8,
            zIndex: -1
        }
    },
    hidden: {
        opacity: 0
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        '&>*:nth-child(1)': {
            width: '30%'
        },
        '&>*:nth-child(2)': {
            width: '70%'
        },
        '&:not(:first-child)': {
            marginTop: theme.spacing(1)
        }
    },
    socialMediaCover: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        borderRadius: '10px',
        height: '25%',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '90px 4fr',
        alignItems: 'stretch',
        alignContent: 'center',
        gridTemplateAreas: `
            "img name"
            "img nickname"
        `,
        '&>img': {
            gridArea: 'img',
            maxHeight: '100%',
        },
        '&>*:not(:first-child)': {
            display: 'flex'
        },
        '&>*:nth-child(2)': {
            alignItems: 'flex-end',
        },
        '&>*:nth-child(3)': {
            alignItems: 'flex-start',
        }
    },
    viewMore: {
        textAlign: 'right',
        height: '10%',
        '&>button': {
            backgroundColor: `${theme.palette.text.primary} !important`,
            color: `${theme.palette.background.default} !important`
        }
    }
}));

const CharacterInfo = ({ isActive, name, birthday, occupation, img, status, nickname }) => {

    const classes = useStyles();

    const history = useHistory();

    const viewProfile = useCallback(() => {
        history.push(`/profile/${name}`);
    }, [history, name]);

    return (
        <Grid container className={clsx('charInfo', classes.info, !isActive && classes.hidden)} alignContent='space-between'>
            <Grid item xs={12} className={clsx(classes.socialMediaCover)}>
                <img src={img} alt={name} />
                <Typography variant='h5'>{name}</Typography>
                <Typography variant='h6'>{nickname}</Typography>
            </Grid>
            <Grid container item xs={12}>
                {
                    [
                        ['Occupation', occupation.join(', ')],
                        ['DOB', birthday],
                        ['Status', status]
                    ].map((item, index) => (
                        <Grid item xs={12} className={clsx(classes.infoContainer)} key={index}>
                            <Typography variant='body2' color='textSecondary'>
                                {item[0]}
                            </Typography>
                            <Typography variant='body1'>
                                {item[1]}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item xs={12} className={clsx(classes.viewMore)}>
                <Button variant='contained' onClick={viewProfile}>View More</Button>
            </Grid>
        </Grid>
    );
}

export default CharacterInfo;