import { combineReducers } from "redux";

import characterListReducer from "./characters/characters.reducer";
import paginationReducer from "./pagination/pagination.reducer";
import themeReducer from "./theme/theme.reducer";

const rootReducer = combineReducers({
    characterList: characterListReducer,
    pagination: paginationReducer,
    theme: themeReducer,
});


export default rootReducer;
