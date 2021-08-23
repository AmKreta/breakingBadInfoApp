import React, { useCallback } from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        padding: theme.spacing(2)
    },
    header: {
        minHeight: '300px',
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
    },
    img: {
        height: '300px'
    },
    flexContainer: {
        width: '100%',
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '&>*:first-child': {
            width: '30%',
        },
        '&>*:last-child': {
            width: '70%',
        }
    },
    flexContainerDiv: {
        flexGrow: 1,
        height: '100',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    realName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>button': {
            marginRight: theme.spacing(1)
        }
    },
    wrapContainer: {
        flexWrap: 'wrap',
        '&>img': {
            width: '100%',
            objectFit: 'cover'
        }
    }
}));

const Profile = ({ name, birthday, occupation, img, status, nickname, portrayed, appearance }) => {

    const classes = useStyles();

    const history = useHistory();

    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <Grid container item xs={12} sm={12} lg={6} className={clsx(classes.container)} alignItems='center' justifyContent='center'>
            <Grid item xs={12} className={clsx(classes.realName)}>
                <IconButton style={{ width: 'auto' }} onClick={goBack}>
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant='h4'>{portrayed}</Typography>
            </Grid>
            <Grid item xs={12} className={clsx(classes.header, !matches && classes.wrapContainer)}>
                <img src={img} alt={name} className={clsx(classes.img)} />
                <div className={clsx(classes.flexContainerDiv)}>
                    {
                        [
                            ['Name', name],
                            ['Nickname', nickname],
                            ['Occupation', occupation.join(', ')],
                            ['DOB', birthday],
                            ['Status', status],
                        ].map((item, index) => (
                            <div key={index} className={clsx(classes.flexContainer)}>
                                <Typography variant='body1' style={{ opacity: '.8' }}>
                                    {item[0]}
                                </Typography>
                                <Typography variant='body1'>
                                    {item[1]}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </Grid>
            <Grid>
                <Typography variant='h6'>
                    <span style={{ opacity: '.8' }}>Featured in seasons -</span>  {appearance.join(',  ')}
                </Typography>

            </Grid>
        </Grid>
    );
}

export default Profile;