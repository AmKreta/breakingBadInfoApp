export const getPaginatedCharacters = ({ currentPage, charactersArray }) => {
    const startIndex = (currentPage - 1)*10;
    const endIndex = currentPage - 1 + 10; // slice returns element till n-1th index
    return charactersArray.slice(startIndex, endIndex);
}
