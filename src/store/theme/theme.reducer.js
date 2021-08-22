import { createTheme } from '@material-ui/core/styles';
import { TOGGLE_THEME } from './theme.action.Types';

const lightTheme = {
    palette: {
        type: 'light',
    }
};

const darkTheme = {
    palette: {
        type: 'dark',
    }
}

const initialState = {
    type: 'light',
    theme: createTheme(lightTheme)
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.type === 'light'
                ? { type: 'dark', theme: createTheme(darkTheme) }
                : { type: 'light', theme: createTheme(lightTheme) };
        default:
            return state ;
    }
}

export default themeReducer;