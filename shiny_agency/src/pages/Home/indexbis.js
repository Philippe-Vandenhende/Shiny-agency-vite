import {sum} from '.';

test('Ma fonction sum', () => {
    const result = sum(7, 3);
    expect(result).toBe(10);
});