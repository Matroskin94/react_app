import { extractData, getFavoritesFromLocal,
    deleteFavoriteFromLocal, addFavoriteToLocal } from '../utils/SearchUtils';
import testData from './testData.json';

const localStorageMock = { 
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
    
global.localStorage = localStorageMock;

// extractDatafunction() tests
test('Empty input array should return empty array []', () => {
    expect(extractData([])).toEqual([]);
});

test('Array with another objects as input should return empty array []', () => {
    expect(extractData(testData.NotSuitableObjectsForItemData)).toEqual([]);
});

test('Array with object with not all suitable properties should return empty array []', () => {
    expect(extractData(testData.extractWrongDataInput)).toEqual([]);
});

// getFavoritesFromLocal() function test
test('Get array of favorites from localStorage, should return parsed array form localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(testData.favoritesList));
    expect(getFavoritesFromLocal()).toEqual(testData.favoritesList);
});

// deleteFavoriteFromLocal() function test
test('Delete item from favoritesList array, should change favoritesList array in localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(testData.favoritesList));
    expect(deleteFavoriteFromLocal(testData.deletedItemKey)).toEqual(testData.favoritesListWithoutDeletedItem);
});

// addFavoriteToLocal() function test
test('Adding favorite item to localStorage, should return array with added item', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(testData.favoritesList));
    expect(addFavoriteToLocal(testData.favoritesListWithAddedItem[2])).toEqual(testData.favoritesListWithAddedItem);
});