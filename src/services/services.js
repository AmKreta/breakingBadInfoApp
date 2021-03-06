import axios from 'axios';

export const baseUrl = 'https://www.breakingbadapi.com/api';

export const requestAllCharacters = async () => {
    let config = {
        method: 'get',
        url: `${baseUrl}/characters`
    };
    return axios(config);
}

export const requestCharactersByCategory = (query) => {
    let config = {
        url: `${baseUrl}/characters`,
        params: {
            category: query
        }
    };
    return axios(config);
};

export const requestCharactersByName = (query) => {
    let config = {
        url: `${baseUrl}/characters`,
        params: {
            name: query
        }
    };
    return axios(config);
}

export const getAllQuotesByAuthor = (characterName) => {
    let config = {
        url: `${baseUrl}/quote`,
        params: {
            author: characterName
        }
    };
    return axios(config);
}


