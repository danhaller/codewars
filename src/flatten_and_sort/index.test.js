const expect = require('expect')
const flatten = require('./index');

describe('flatten & sort', () => {
  it('empty arrays should return empty array', () => {
    expect(flatten([[], []])).toEqual([]);
  });

  it('arrays should be flattened', () => {
    expect(flatten([[1,2,3], [4,5,6]])).toEqual([1,2,3,4,5,6]);
  });

  it('should sort unsorted arrays', () => {
    expect(flatten([[3,2,1], [6,5,4]])).toEqual([1,2,3,4,5,6]);
  });

  it('should sort numerically', () => {
    expect(flatten([[1,11,3], [4,5,6]])).toEqual([1,3,4,5,6,11]);
  });
});
