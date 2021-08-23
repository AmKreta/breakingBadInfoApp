import { SET_FILTER, SET_SEARCH_TEXT } from "./search.actionTypes";

const initialState = {
    filter: 'name',
    text: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_SEARCH_TEXT:
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default searchReducer;