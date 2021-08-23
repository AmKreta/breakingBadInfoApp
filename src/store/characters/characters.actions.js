import { SET_CHARACTERS_LIST, SET_CHARACTERS_LIST_LOADING, SET_CHARACTERS_LIST_ERROR } from './charactres.actionTypes';
import { requestAllCharacters, requestCharactersByCategory, requestCharactersByName } from '../../services/services';

const setCharacterListLoading = (payload) => {
    return { type: SET_CHARACTERS_LIST_LOADING, payload }
}

const setCharacterListError = (payload) => {
    return { type: SET_CHARACTERS_LIST_ERROR, payload }
}

export const setCharacterList = (search) => {
    return async (dispatch) => {
        dispatch(setCharacterListLoading(true));
        if (search.text !== '') {
            if (search.filter === 'name') {
                requestCharactersByName(search.text)
                    .then(res => {
                        dispatch({ type: SET_CHARACTERS_LIST, payload: res.data });
                        dispatch(setCharacterListError(false));
                    })
                    .catch(err => dispatch(setCharacterListError(true)))
                    .finally(() => dispatch(setCharacterListLoading(false)));
            }
            else if (search.filter === 'category') {
                requestCharactersByCategory(search.text)
                    .then(res => {
                        dispatch({ type: SET_CHARACTERS_LIST, payload: res.data });
                        dispatch(setCharacterListError(false));
                    })
                    .catch(err => dispatch(setCharacterListError(true)))
                    .finally(() => dispatch(setCharacterListLoading(false)));
            }
        }
        else {
            requestAllCharacters()
                .then(res => {
                    dispatch({ type: SET_CHARACTERS_LIST, payload: res.data });
                    dispatch(setCharacterListError(false));
                })
                .catch(err => dispatch(setCharacterListError(true)))
                .finally(() => dispatch(setCharacterListLoading(false)));
        }
    }
}