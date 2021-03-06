import React, { useCallback, useState, useEffect } from 'react';
import { Grid, Typography, IconButton, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { goToNextPage, goToPrevPage, jumpToPage } from '../../action/action';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '10%'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '30px',
        height: '30px',
        padding: '5px',
        textAlign: "center",
        border: '1px solid #ccc',
        boxShadow: '0 0 2px #ccc',
        borderRadius: '5px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        margin: `0 ${theme.spacing(1)}px`
    }
}));

const Pagination = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.pagination.currentPage);
    const maxPage = useSelector(state => {
        const length = state.characterList.list.length;
        return length === 0 ? 1 : Math.ceil(length / 10);
    });

    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [setPage, currentPage]);

    const changeHandler = useCallback((e) => {
        const value = e.target.value;
        setPage(parseInt(value));
    }, [setPage]);

    const nextHandler = useCallback(() => {
        (currentPage < maxPage) && dispatch(goToNextPage());
    }, [dispatch, currentPage, maxPage]);

    const prevHandler = useCallback(() => {
        (currentPage > 1) && dispatch(goToPrevPage());
    }, [dispatch, currentPage]);

    const jumpHandler = useCallback((e) => {
        if (page >= 1 && page <= maxPage) {
            dispatch(jumpToPage(page));
        }
        else {
            alert(`page should be in limit [1, ${maxPage}]`);
        }
    }, [dispatch, page, maxPage]);

    return (
        <Grid container item xs={12} className={clsx(classes.container)} justifyContent='center'>
            <Grid item xs={2} sm={3} md={3} lg={2} className={clsx(classes.flex)}>
                <IconButton title='previous page' onClick={prevHandler} disabled={currentPage === 1}>
                    <ArrowBackIosIcon />
                </IconButton>
            </Grid>
            <Grid item xs={8} sm={5} md={4} lg={4} className={clsx(classes.flex)}>
                <Typography color='textPrimary' variant='body1'>
                    Jump To Page
                </Typography>
                <input
                    type='number'
                    value={page}
                    className={clsx(classes.input)}
                    onChange={changeHandler}
                    min={1}
                    max={maxPage}
                />
                <Button onClick={jumpHandler}>
                    Go
                </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3} lg={2} className={clsx(classes.flex)}>
                <IconButton title='next page' onClick={nextHandler} disabled={currentPage === maxPage}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
        </Grid >
    );
}

export default Pagination;