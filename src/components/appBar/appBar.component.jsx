import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, TextField, InputAdornment, Switch, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { toggleTheme } from '../../action/action';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import SearchIcon from '@material-ui/icons/Search';
import { setFilter, setSearchText } from '../../action/action';
import { setCharacterList } from '../../action/action';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '15%',
    },
    toolBar: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>*': {
            margin: `${theme.spacing(1)}px 0`
        }
    },
    input: {
        width: 'min(100%,500px)',
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Appbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const toggleHandler = useCallback(() => {
        dispatch(toggleTheme());
    }, [dispatch]);

    const search = useSelector(state => state.search);

    const changeSearchText = useCallback((e) => {
        dispatch(setSearchText(e.target.value));
    }, [dispatch]);

    const changeFilter = useCallback((e) => {
        dispatch(setFilter(e.target.value))
    }, [dispatch]);

    useEffect(() => {
        //to update items according to search
        dispatch(setCharacterList(search));
    }, [search, dispatch]);

    return (
        <AppBar position='sticky' elevation={0} className={clsx(classes.appBar)}>
            <Toolbar className={clsx(classes.toolBar)}>
                <Typography variant='h4'>
                    Breaking Bad
                </Typography>
                <TextField
                    className={classes.input}
                    name='searchBar'
                    placeholder='search character'
                    variant='outlined'
                    value={search.text}
                    onChange={changeSearchText}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end' value='search' title='filter'>
                                <Select value={search.filter} onChange={changeFilter}>
                                    <MenuItem value='name'>name</MenuItem>
                                    <MenuItem value='category'>category</MenuItem>
                                </Select>
                            </InputAdornment>
                        )
                    }}
                />
                <div className={clsx(classes.flex)} title='toggle light/dark mode'>
                    <Brightness6Icon />
                    <Switch color='primary' onClick={toggleHandler} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;