import { setCharacterList } from '../store/characters/characters.actions';
import { goToPrevPage, goToNextPage, jumpToPage } from '../store/pagination/pagination.action';
import { toggleTheme } from '../store/theme/theme.actions';
import { setFilter, setSearchText } from '../store/search/search.actions';

export {
    setCharacterList,
    goToNextPage,
    goToPrevPage,
    jumpToPage,
    toggleTheme,
    setFilter,
    setSearchText
};