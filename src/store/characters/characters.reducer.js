import { SET_CHARACTERS_LIST_LOADING, SET_CHARACTERS_LIST_ERROR, SET_CHARACTERS_LIST } from './charactres.actionTypes';

const initialState = {
    loading: false,
    error: false,
    list: []
};

export const characterListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_LIST_LOADING:
            return { ...state, loading: action.payload };
        case SET_CHARACTERS_LIST_ERROR:
            return { ...state, error: action.payload };
        case SET_CHARACTERS_LIST:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}

export default characterListReducer;