const filterItems = require('..');

describe('Funkcja filterItems', () => {
  it('powinna zwrócić tablicę', async () => {
    const result = filterItems([1, 1], [1, 1]);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it('powinna zwrócić tylko jedna tablicę z liczbami dodatnimi', async () => {
    expect(filterItems([1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
    expect(filterItems([], [])).toEqual([]);
    expect(filterItems([-1, -1, -1], [-1, -1, -1])).toEqual([]);
    expect(filterItems([-1, 0, 1], [-1, 0, 1])).toEqual([1, 1]);
    expect(filterItems([0], [0])).toEqual([]);
    expect(filterItems([1, -2, -3, 4], [-1, -2])).toEqual([1, 4]);
    expect(filterItems([1, -2, 3, -4], [-1, 2, -3, 4])).toEqual([1, 3, 2, 4]);
  });
});
