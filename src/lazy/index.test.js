const expect = require('expect')
const lazy = require('./index');

describe('lazy', () => {
  it('should delay execution', () => {
    const double = n => n*2;
    const lazyDouble = lazy(double, 2);

    expect(lazyDouble()).toBe(4);
  });

  it('should handle multiple arguments', () => {
    const add = (x,y) => x+y;

    const lazyAdd = lazy(add, 5, 4);

    expect(lazyAdd()).toBe(9);
  });
});
