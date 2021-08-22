import { setCharacterList } from '../store/characters/characters.actions';
import { goToPrevPage, goToNextPage, jumpToPage } from '../store/pagination/pagination.action';
import { toggleTheme } from '../store/theme/theme.actions';

export {
    setCharacterList,
    goToNextPage,
    goToPrevPage,
    jumpToPage,
    toggleTheme
};