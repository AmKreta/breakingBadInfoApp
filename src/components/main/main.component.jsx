import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import CharacterCard from './characterCard/characterCard.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        minHeight: '85%',
    }
}));

const Main = () => {
    const classes = useStyles();
    const characterList = useSelector(state => state.characterList);
    const currentPage = useSelector(state => state.pagination.currentPage);

    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    useEffect(() => {
        characterList.list?.length && setItemsToDisplay(() => {
            document.querySelector('#root>*:nth-Child(1)').scroll({
                top: 0,
                behavior: 'smooth'
            })
            return characterList.list.filter((item, index) => {
                return (index >= (currentPage - 1) * 10 && index < ((currentPage - 1) * 10) + 10)
            })
        });
    }, [setItemsToDisplay, characterList, currentPage]);

    return (
        <Grid container className={clsx(classes.container)} alignItems='flex-start' >
            <Backdrop open={characterList.loading} style={{ zIndex: 2 }}>
                <CircularProgress />
            </Backdrop>
            {
                itemsToDisplay.map((item, index) => (
                    <CharacterCard {...item} key={`${index}_${item.char_id}`} />
                ))
            }
        </Grid>
    );
}

export default Main;