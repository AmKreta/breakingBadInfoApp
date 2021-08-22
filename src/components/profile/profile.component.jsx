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
        backgroundColor: theme.palette.background.default
    }
}));

const Profile = ({ match }) => {

    const classes = useStyles();
    const charInfo = useSelector(state => state.characterList.list.find(item => item?.name === match.params.name));
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        (async function () {
            if (charInfo?.name) {
                let res = await getAllQuotesByAuthor(charInfo.name);
                setQuotes(res.data);
            }
        })()
    }, [setQuotes, charInfo?.name]);

    return (
        <Grid container className="profile" className={clsx(classes.container)}>
            {
                charInfo
                    ? (
                        <>
                            <Info {...charInfo} />
                            <Quotes quotes={quotes} />
                        </>
                    )
                    : (
                        <Backdrop>
                            <CircularProgress />
                        </Backdrop>
                    )

            }
        </Grid>
    );
}

export default Profile;