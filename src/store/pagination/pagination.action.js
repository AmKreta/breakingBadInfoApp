import { GO_TO_PREV_PAGE, GO_TO_NEXT_PAGE, JUMP_TO_PAGE } from './pagination.actionTypes';

export const goToNextPage = () => {
    return { type: GO_TO_NEXT_PAGE };
}

export const goToPrevPage = () => {
    return { type: GO_TO_PREV_PAGE };
}

export const jumpToPage = (pageNo = 1) => {
    return { type: JUMP_TO_PAGE, payload: pageNo };
}