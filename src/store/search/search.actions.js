import { SET_FILTER, SET_SEARCH_TEXT } from "./search.actionTypes";

export const setFilter = (filter) => {
    return { type: SET_FILTER, payload: filter };
}

export const setSearchText = (text) => {
    return { type: SET_SEARCH_TEXT, payload: text };
}