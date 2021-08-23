import { combineReducers } from "redux";

import characterListReducer from "./characters/characters.reducer";
import paginationReducer from "./pagination/pagination.reducer";
import themeReducer from "./theme/theme.reducer";
import searchReducer from "./search/search.reducer";

const rootReducer = combineReducers({
    characterList: characterListReducer,
    pagination: paginationReducer,
    theme: themeReducer,
    search: searchReducer
});


export default rootReducer;
