export const pagination = ({ characterArray, currentPage }) => {
    const paginatedCharactersArray = [];

    const startIndex = (currentPage - 1) * 10;
    const endIndex = ((currentPage - 1) * 10) + 10;

    for (let i = startIndex; (i < endIndex && i < characterArray.length); i++) {
        paginatedCharactersArray.push(characterArray[i]);
    }
    return paginatedCharactersArray;
}