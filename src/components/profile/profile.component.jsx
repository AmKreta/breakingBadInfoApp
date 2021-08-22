import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';

import Info from './info/info.component';
import Quotes from './quotes/quotes.component';

import { getAllQuotesByAuthor } from '../../services/services';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.default,
    },
    backdrop: {
        zIndex: 3,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    }
}));

const Profile = ({ match }) => {

    const classes = useStyles();
    const charInfo = useSelector(state => state.characterList.list.find(item => item?.name === match.params.name));
    const [quotes, setQuotes] = useState({ loading: 'starting', quotes: [] });

    useEffect(() => {
        (async function () {
            if (charInfo?.name) {
                let res = await getAllQuotesByAuthor(charInfo.name);
                setQuotes({ loading: 'finished', quotes: res.data });
            }
        })()
    }, [setQuotes, charInfo?.name]);

    return (
        <Grid container className={clsx(classes.container)}>
            {
                charInfo && quotes.loading === 'finished'
                    ? (
                        <>
                            <Info {...charInfo} />
                            <Quotes quotes={quotes.quotes} />
                        </>
                    )
                    : (
                        <Backdrop open={true} className={clsx(classes.backdrop)}>
                            <CircularProgress />
                        </Backdrop>
                    )

            }
        </Grid>
    );
}

export default Profile;