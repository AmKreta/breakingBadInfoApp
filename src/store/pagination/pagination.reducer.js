import { GO_TO_PREV_PAGE, GO_TO_NEXT_PAGE, JUMP_TO_PAGE } from './pagination.actionTypes';

const initialState = {
    currentPage: 1
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_TO_PREV_PAGE:
            return state.currentPage > 1 ? ({ ...state, currentPage: state.currentPage - 1 }) : state;
        case GO_TO_NEXT_PAGE:
            return state.currentPage < 7 ? ({ ...state, currentPage: state.currentPage + 1 }) : state;
        case JUMP_TO_PAGE:
            if(action.payload>=1 && action.payload<=7){
                return { ...state, currentPage: action.payload };
            }
            else{
                alert ('only values between 1 and 7 are valid !');
                return {...state}
            }
        default:
            return state ;
    }
}

export default paginationReducer;