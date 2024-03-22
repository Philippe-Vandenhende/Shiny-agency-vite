import { formatFetchParams, formatJobList} from "./";
import { describe, it, test, expect} from 'vitest';

describe('La fonction formatJobList', () => {
    test('ajoute une virgule à un item',  () => {
        const expectedState = 'item2,';
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
    });
    test('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3';
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
    });
});

describe('La fonction formatFetchParams', () => {
    test("n'ajoute pas de séparateur avant le premier élément", () => {
        const expectedState = 'a1=a';
        expect(formatFetchParams({1: 'a'})).toEqual(expectedState);
    });
    test("ajoute un séparateur avant un élément", () => {
        const expectedState = 'a1=a&a2=b';
        expect(formatFetchParams({1: 'a', 2: 'b'})).toEqual(expectedState);
    });
});