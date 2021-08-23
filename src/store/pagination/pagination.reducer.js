import { GO_TO_PREV_PAGE, GO_TO_NEXT_PAGE, JUMP_TO_PAGE } from './pagination.actionTypes';

const initialState = {
    currentPage: 1
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_TO_PREV_PAGE:
            return { ...state, currentPage: state.currentPage - 1 };
        case GO_TO_NEXT_PAGE:
            return { ...state, currentPage: state.currentPage + 1 };
        case JUMP_TO_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
}

export default paginationReducer;