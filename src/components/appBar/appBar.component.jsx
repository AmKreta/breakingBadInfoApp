import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, TextField, InputAdornment, Switch, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { toggleTheme } from '../../action/action';
import Brightness6Icon from '@material-ui/icons/Brightness6';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: `${theme.spacing(1)}px 0`,
        height: '15%'
    },
    toolBar: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '40%'
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                amk
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end' value='search'>
                                <Select>
                                    <MenuItem selected>Search</MenuItem>
                                    <MenuItem>Filter</MenuItem>
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