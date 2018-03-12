import { extractData, getFavoritesFromLocal,
    deleteFavoriteFromLocal, addFavoriteToLocal } from '../utils/SearchUtils';
import { notSuitableObjectsForItemData, extractWrongDataInput,
    extractDataPropriateInput, extractDataPropriateOutput,
    favoritesList, deletedItemKey, favoritesListWithoutDeletedItem,
    favoritesListWithAddedItem } from './searchUtilsMocks.json';

const localStorageMock = { 
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
    
global.localStorage = localStorageMock;

describe('extractData function tests', () => {
    // extractDatafunction() tests
    test('Empty input array should return empty array []', () => {
        expect(extractData([])).toEqual([]);
    });

    test('Array with another objects as input should return empty array []', () => {
        expect(extractData(notSuitableObjectsForItemData)).toEqual([]);
    });

    test('Array with object with not all suitable properties should return empty array []', () => {
        expect(extractData(extractWrongDataInput)).toEqual([]);
    });

    test('Input as undefined should return empty array []', () => {
        expect(extractData(undefined)).toEqual([]);
    });

    test('Array of suitable objects, functon should return array with objects with necessary properties', () => {
        expect(extractData(extractDataPropriateInput)).toEqual(extractDataPropriateOutput);
    });

});

// getFavoritesFromLocal() function test
test('Get array of favorites from localStorage, should return parsed array form localStorage', () => {
    expect(getFavoritesFromLocal()).toBeInstanceOf(Array);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('favoritesList');
});

// deleteFavoriteFromLocal() function test
test('Delete item from favoritesList array, should change favoritesList array in localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(favoritesList));
    deleteFavoriteFromLocal(deletedItemKey);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('favoritesList');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('favoritesList', expect.any(String));
});

// addFavoriteToLocal() function test
test('Adding favorite item to localStorage, should return array with added item', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(favoritesList));
    addFavoriteToLocal(favoritesListWithAddedItem[2]);
    expect(localStorage.getItem).toHaveBeenCalledWith('favoritesList');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('favoritesList', expect.any(String));
});