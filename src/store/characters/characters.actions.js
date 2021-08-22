import { SET_CHARACTERS_LIST, SET_CHARACTERS_LIST_LOADING, SET_CHARACTERS_LIST_ERROR } from './charactres.actionTypes';
import { requestAllCharacters } from '../../services/services';

const setCharacterListLoading = (payload) => {
    return { type: SET_CHARACTERS_LIST_LOADING, payload }
}

const setCharacterListError = (payload) => {
    return { type: SET_CHARACTERS_LIST_ERROR, payload }
}

export const setCharacterList = () => {
    return async (dispatch) => {
        dispatch(setCharacterListLoading(true));
        requestAllCharacters()
            .then(res => {
                dispatch({ type: SET_CHARACTERS_LIST, payload: res.data });
                dispatch(setCharacterListError(false));
            })
            .catch(err => dispatch(setCharacterListError(true)))
            .finally(() => dispatch(setCharacterListLoading(false)));
    }
}